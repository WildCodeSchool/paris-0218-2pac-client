import React from 'react'
import api from '../api'
import './Resources.css'

const Resources = ({ documents }) => {
  return (
    <div>
      {documents.map(doc =>
        <div key={doc.id} className="resource" >
          <span>{doc.title}</span>
          <div className="category_resources">{doc.type}</div>
          <a target="_blank" href={`${api.hostUrl}/medias/documents/${doc.url}`}>Télécharger</a>
        </div>
      )}
    </div>
  )
}

export default Resources
