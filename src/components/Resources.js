import React from 'react'
import DocumentPreview from './DocumentPreview'
import './Resources.css'

const Resources = ({ documents }) => {
  return (
    <div>
      {documents.map(doc =>
        <div className="resource" >
          <span category={doc.name} className="category">{doc.name}</span>
          <DocumentPreview title={doc.title} shortDescription={doc.shortDescription} url={doc.url}/>
        </div>
      )}
    </div>
  )
}

export default Resources
