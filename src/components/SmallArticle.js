import React from 'react'
import ArticlePreview from './ArticlePreview'

const SmallArticle = (props) => {
  return (

    <div className="small-article">
      <span className="category">Category</span>
      <ArticlePreview  title={props.title} />
    </div>

  )
}

export default SmallArticle
