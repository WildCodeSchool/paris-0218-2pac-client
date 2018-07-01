import React from 'react'
import './AsideLeft.css'

const AsideLeft = props => {
  return (

    <div className="aside-left-content">
      <span className="category"><b>{props.category}</b></span>
      <span className="aside-left-title"><b>{props.title}</b></span>
      <p>{props.shortDescription}</p>
      <p><a className="aside-link" > Lire la suite</a></p>
    </div>
  )
}

export default AsideLeft
