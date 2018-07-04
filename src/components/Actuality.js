import React from 'react'
import ArticlePreview from './ArticlePreview'
import './Actuality.css'
import { Link } from '@reach/router'

const Actuality = ({ articles }) => {
  return (
    <div className="actu-container">
      {articles.map(article =>
        <Link to={`/article/${article.id}`}>
          <div className="actuality" style={{ backgroundImage: `url(${article.imageURL})` }} >
            <span category={article.category} className="category">{article.category}</span>
            <ArticlePreview title={article.title} shortDescription={article.shortDescription} />
          </div>
        </Link>
      )}
    </div>
  )
}

export default Actuality
