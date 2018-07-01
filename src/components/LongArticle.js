import React from 'react'
import ArticlePreview from './ArticlePreview'

const LongArticle = (props) => {
  return (

    <div className="article-childrens">
      <span category={props.category} className="category">{props.category}</span>
      <ArticlePreview title={props.title} shortDescription={props.shortDescription} />
    </div>

  )
}

export default LongArticle
