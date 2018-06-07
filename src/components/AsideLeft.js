import React, { Component } from 'react'
import './AsideLeft.css'

class AsideLeft extends Component {

  render(){
         return(
          <div className="AsideLeft_Line">
          <span>CATEGORIE</span>
          <h4>Titre article</h4>
          <p>Texte de l'article</p>
           <a href="#lien vers la page de l'article">>>> Lire la suite</a>
           </div>
                )
          }
}


  export default AsideLeft;
