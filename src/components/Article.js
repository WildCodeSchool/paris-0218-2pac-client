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

  const tags = article.tags.split(',').map((tag, i) => <span key={i} className="tag">{tag}</span>)

  return (
    <Container>
      <div className="intro-article">
        <ChevronTitle title={article.title} />
        {noImgFunc()}
        <div className="intro-details">
          <span className="category">{article.category}</span>
          <span className="tags">{tags}</span>
          <span className="date">Mis en ligne le {(new Date(article.createdAt)).toLocaleString().slice(0, -3)}</span>
          {article.categoryId === 4 ? <span>Date de l'évenement: {(new Date(article.eventDate)).toLocaleDateString()}</span> : ''}
        </div>
      </div>
      <div className="article-body">
        <p className="headline">
          {article.shortDescription}
        </p>
        <p className="content" dangerouslySetInnerHTML={{ __html: article.description }}></p>
      </div>
    </Container>
  )
}

export default Article
