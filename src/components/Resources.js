import React from 'react'
import api from '../api'
import './Resources.css'

const Resources = ({ documents }) => {
  return (
    <div>
      {documents.map(doc =>
        <div key={doc.id} className="resource" >
          <span className="category">{doc.type}</span>
          <p>{doc.shortDescription.slice(0, 140)}..</p>
          <a target="_blank" href={`${api.hostUrl}/medias/documents/${doc.url}`}>{doc.url}</a>
        </div>
      )}
    </div>
  )
}

export default Resources
