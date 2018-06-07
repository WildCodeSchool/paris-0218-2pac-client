import React, { Component } from 'react'
import FaChevronRight from 'react-icons/lib/fa/chevron-right'
import './IntroArticle.css'
import Title from './Title'
import Tag from './Tag'
import introImg from '../img/photo_couverture_web.jpg'

const IntroArticle  = () => {

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
