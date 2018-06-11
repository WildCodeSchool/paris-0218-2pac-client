import React, { Component } from 'react'
import './AsideLeft.css'

class AsideLeft extends Component {
  render () {
    return (
      <div className="AsideLeft_Line">
        <h1><span>>>></span>FIL D'ACTUALITÉS</h1>
        <span className="category"><b>CATÉGORIE</b></span>
        <span className="title"><b>Titre de l'article</b></span>
        <p>C'est le texte de l'article C'est le texte de l'article C'est le texte de l'article</p>
        <p><a className="mb" href="#lien vers la page de l'article">>>> Lire la suite</a></p>
      </div>
    )
  }
}

export default AsideLeft
