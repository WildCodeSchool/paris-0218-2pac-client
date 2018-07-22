import React from 'react'
import ScrollUp from '../containers/utils/ScrollUp'
import ArticleCard from '../components/ArticleCard'
import './SearchResultsPage.css'
import Fuse from 'fuse.js'

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

const byMostRecent = (a, b) => new Date(b.createdAt) - new Date(a.createdAt)

const SearchResultsPage = ({ articles, searchValue }) => {
  const resultArticles = search(searchValue, articles)

  const articleCards = resultArticles
    .sort(byMostRecent)
    .map(article => <ArticleCard key={article.id} article={article} displayShortDescription />)

  return (
    <ScrollUp>
      <div id="search-results-page" className="container">
        <span>{resultArticles.length} resultats pour "{searchValue}"</span>
        {articleCards}
      </div>
    </ScrollUp>
  )
}

export default SearchResultsPage
