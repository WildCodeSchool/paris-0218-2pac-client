import React from 'react'
import api from '../api'
import './Resources.css'

const Resources = ({ documents }) => {
  return (
    <div>
      {documents.map(doc =>
        <div key={doc.id} className="resource" >
          <div className="category_resources">{doc.type}</div>
          <span>{doc.title}</span>
          <a target="_blank" href={`${api.hostUrl}/medias/documents/${doc.url}`}>Télécharger</a>
        </div>
      )}
    </div>
  )
}

export default Resources
