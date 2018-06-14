import React from 'react'
import Container from './Container'
import Tag from './Tag'
import ChevronTitle from './ChevronTitle'
import './Article.css'

const Article = ({ article }) => {
  return (
    <Container>
      <div className="intro-article">
        <ChevronTitle title={article.title}> </ChevronTitle>
        <div className="intro-img" style={ { backgroundImage: `url(${article.imageURL})` } }></div>
        <p className="img-legend">{article.imageDescription}</p>
        <div className="intro-details">
          <span className="category">{article.category}</span>
          <span className="date">{article.createdAt}</span>
          <span className="tag-container">
            {article.tags.map(tag => <Tag key={tag.id} tag={tag} />)}
          </span>
        </div>
      </div>
      <div className="article-body">
        <p className="headline">
          {article.shortDescription}
        </p>
        <p className="content">
          {article.description}
        </p>
      </div>
    </Container>
  )
}

export default Article
