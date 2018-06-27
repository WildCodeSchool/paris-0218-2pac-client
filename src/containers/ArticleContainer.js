import React from 'react'
import Article from '../components/Article'

const ArticleContainer = (props) => {
  return (

    <div className="router-container">
      <Article article={props.article} />
    </div>

  )
}

export default ArticleContainer
