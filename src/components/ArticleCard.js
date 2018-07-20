import React from 'react'
import { Link } from '@reach/router'
import CategoryLabel from './CategoryLabel'
import './ArticleCard.css'

const ArticleCard = ({ article, displayShortDescription = false }) =>
  <Link className="article-card" to={`/article/${article.id}`} style={{ backgroundImage: `url(${article.imageURL})` }}>
    <CategoryLabel>{article.category}</CategoryLabel>
    <div className="article-card-footer">
      <div className="article-card-title bold">{article.title}</div>
      {displayShortDescription ? <div>{article.shortDescription}</div> : ''}
    </div>
  </Link>

export default ArticleCard
