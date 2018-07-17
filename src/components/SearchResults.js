import React from 'react'
import ArticlePreview from './ArticlePreview'
import './Actuality.css'
import { Link } from '@reach/router'
import Fuse from 'fuse.js'

const ActualityCard = ({ article }) =>
  <Link to={`/article/${article.id}`}>
    <div className="actuality card" style={{ backgroundImage: `url(${article.imageURL})` }} >
      <span className="category">{article.category}</span>
      <ArticlePreview title={article.title} shortDescription={article.shortDescription} />
    </div>
  </Link>

const options = {
  shouldSort: true,
  includeScore: false,
  threshold: 0.5,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    'title',
    'tags'
  ]
}

const search = (searchValue, source) => {
  const fuse = new Fuse(source, options)

  return fuse.search(searchValue)
}

const SearchResults = ({ articles, searchValue }) => {
  const resultArticles = search(searchValue, articles)

  return (
    <div className="actuality-container">
      <span>{resultArticles.length} resultats pour "{searchValue}"</span>
      {resultArticles.map(article => <ActualityCard key={article.id} article={article} />)}
    </div>
  )
}

export default SearchResults
