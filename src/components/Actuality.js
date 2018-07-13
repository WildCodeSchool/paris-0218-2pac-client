import React from 'react'
import ArticlePreview from './ArticlePreview'
import './Actuality.css'
import { Link } from '@reach/router'

const ActualityCard = ({ article }) =>
  <Link to={`/article/${article.id}`}>
    <div className="actuality card" style={{ backgroundImage: `url(${article.imageURL})` }} >
      <span className="category">{article.category}</span>
      <ArticlePreview title={article.title} shortDescription={article.shortDescription} />
    </div>
  </Link>

const Actuality = ({ articles }) => {
  return (
    <div className="actuality-container">
      {articles.map(article => <ActualityCard key={article.id} article={article} />)}
    </div>
  )
}

export default Actuality
