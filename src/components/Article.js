import React from 'react'
import CategoryLabel from './CategoryLabel'
import ChevronTitle from './ChevronTitle'
import './Article.css'

const Tag = ({ children }) => <span className="tag">{children}</span>

const Article = ({ article }) => {
  const tags = article.tags.split(',')
    .filter(tag => tag !== '')
    .map((tag, i) => <Tag key={i}>{tag}</Tag>)

  return (
    <div className="article">
      <div className="article-header">
        <h3><ChevronTitle title={article.title} /></h3>
        <div className="article-cover-image" style={{ backgroundImage: `url(${article.imageURL})` }}></div>
        <span className="article-cover-image-legend">{article.imageDescription}</span>
        <div className="article-header-details">
          <CategoryLabel>{article.category}</CategoryLabel>
          <span className="article-created-date bold">{(new Date(article.createdAt)).toLocaleDateString()}</span>
          <span className="article-tags">{tags}</span>
        </div>
      </div>
      <div className="article-content" dangerouslySetInnerHTML={{ __html: article.description }}></div>
    </div>
  )
}

export default Article
