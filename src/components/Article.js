import React from 'react'
import Container from './Container'
import ChevronTitle from './ChevronTitle'
import './Article.css'

const Article = ({ article }) => {
  const noImgFunc = () => {
    if (article.imageURL === '') {
      return (
        <div className="intro-img" style={ { display: 'none' } }>
          <p className="img-legend">{article.imageDescription}</p>
        </div>
      )
    } else {
      return (
        <div className="intro-img" style={ { backgroundImage: `url(${article.imageURL})` } }>
          <p className="img-legend">{article.imageDescription}</p>
        </div>
      )
    }
  }

  return (
    <Container>
      <div className="intro-article">
        <ChevronTitle title={article.title} />
        {noImgFunc()}
        <div className="intro-details">
          <span className="category">{article.category}</span>
          <span className="date">{article.createdAt}</span>

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
