import React from 'react'
import './DocumentPreview.css'

const DocumentPreview = (props) => {
  return (

    <div className="preview-container">
      <div className="preview-title"><b>{props.title}</b></div>
      <span> {props.shortDescription} </span>
    </div>

  )
}

export default DocumentPreview
