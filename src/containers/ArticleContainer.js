import React from 'react'
import Article from '../components/Article'

const ArticleContainer = (props) => {
  const article = props.articles.find(article => String(article.id) === props.id)

  return (
    <div className="router-container">
      {
        article !== undefined ? <Article article={article} /> : 'Not found'
      }
    </div>

  )
}

export default ArticleContainer
