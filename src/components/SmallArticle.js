import React from 'react'
import ArticlePreview from './ArticlePreview'

const SmallArticle = (props) => {
  return (

    <div>
      <div className="small-article" style={props.style}>
        <span category={props.category} className="category">{props.category}</span>
        <ArticlePreview title={props.title} />
      </div>
    </div>
  )
}

export default SmallArticle
