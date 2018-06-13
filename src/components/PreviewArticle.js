import React, {Component} from 'react'
import Container from './Container.js'
import './PreviewArticle.css'

class PreviewArticle extends Component {
  render () {
  return (
      <div>
      <h1 className='titleArticle'>Titre de l'article</h1>
      <div className='uneArticle'> Victus universis caro ferina est lactisque abundans copia qua
          sustentantur, et herbae multiplices et siquae alites capi per
          aucupium possint.
      </div>
      </div>
    )
  }
}

export default PreviewArticle
