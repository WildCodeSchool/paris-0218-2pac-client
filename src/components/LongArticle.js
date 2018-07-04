import React from 'react'
import ArticlePreview from './ArticlePreview'

const LongArticle = ({ article }) => {
  return (
    <div className="article-childrens">
      <span category={article.category} className="category">{article.category}</span>
      <ArticlePreview title={article.title} shortDescription={article.shortDescription} />
    </div>
  )
}

export default LongArticle
