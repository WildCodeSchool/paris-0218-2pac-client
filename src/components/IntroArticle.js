import React from 'react'
import './IntroArticle.css'
import Title from './Title'
import Tag from './Tag'

const IntroArticle = () => {
  return (
    <div>

      <Title title="Titre de l'article"></Title>

      <div className="intro-img"> </div>
      <div className="img-credit"> <span>Crédit </span>: Juste un test temporaire de style</div>

      <div className="intro-details">
        <span className="category"> catégorie </span>
        <span className="date"> 06 - 06 - 2006 </span>
        <span className="tag-container"> <Tag /> <Tag /> <Tag /> </span>
      </div>

    </div>
  )
}

export default IntroArticle
