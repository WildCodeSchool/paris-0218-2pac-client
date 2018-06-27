import React from 'react'
import Article from '../components/Article'
import Page404 from '../components/Page404'

const ArticleContainer = (props) => {
  const article = props.articles.find(article => String(article.id) === props.id)

  return (
    <div className="router-container">
      {
        article !== undefined ? <Article article={article} /> : <Page404 />
      }
    </div>

  )
}

export default ArticleContainer
