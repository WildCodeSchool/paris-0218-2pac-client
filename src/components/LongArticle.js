import React from 'react'
import ArticlePreview from './ArticlePreview'

const LongArticle = (props) => {
  return (
    <a href='/' className="article-childrens">
        <span category={props.category} className="category">{props.category}</span>
        <ArticlePreview  title={props.title} shortDescription={props.shortDescription} />
    </a>
  )
}

export default LongArticle
