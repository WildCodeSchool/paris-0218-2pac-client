import React from 'react'
import './AsideLeft.css'

const AsideLeft = props => {
  return (
    <div className="AsideLeft_Line">
      <h1><span></span>FIL D'ACTUALITÉS</h1>
      <span className="category"><b>{props.categoryId}</b></span>
      <span className="title"><b>{props.title}</b></span>
      <p>{props.shortDescription}</p>
      <p><a className="mb" href="#lien vers la page de l'article"> Lire la suite</a></p>
    </div>
  )
}

export default AsideLeft
