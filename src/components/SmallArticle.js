import React from 'react'
import ArticlePreview from './ArticlePreview'

const SmallArticle = (props) => {
  return (

    <a href="/">
      <div className="small-article" style={props.style}>
        <span category={props.category} className="category">{props.category}</span>
        <ArticlePreview  title={props.title} />
      </div>
    </a>
  )
}

export default SmallArticle
