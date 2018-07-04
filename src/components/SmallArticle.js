import React from 'react'
import ArticlePreview from './ArticlePreview'

const SmallArticle = ({ article }) => {
  return (
    <div style={{ backgroundImage: `url(${article.imageURL})` }}>
      <div className="small-article" style={article.style}>
        <span category={article.category} className="category">{article.category}</span>
        <ArticlePreview title={article.title} />
      </div>
    </div>
  )
}

export default SmallArticle
