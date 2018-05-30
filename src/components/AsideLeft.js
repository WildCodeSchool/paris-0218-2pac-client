import React, { Component } from 'react'
import './AsideLeft.css'

class AsideLeft extends Component {
  render () {
    return (
      <div className="asideleft-line">
        <span>CATEGORIE</span>
        <h4>Titre article</h4>
        <p>blablabla</p>
        <a href="#lien vers la page de l'article"> Lire la suite</a>
      </div>
    )
  }
}

export default AsideLeft
