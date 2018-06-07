import React from 'react'
import FaChevronRight from 'react-icons/lib/fa/chevron-right'
import './IntroArticle.css'
import Tag from './Tag'

const IntroArticle = () => {
  return (
    <div>

      <div className="title"> <FaChevronRight className='icon' /> Titre de l'article </div>
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
