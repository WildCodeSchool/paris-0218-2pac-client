import React from 'react'
import DocumentPreview from './DocumentPreview'
import './Resources.css'
import { Link } from "@reach/router";

const Resources = ({ ResourceData }) => {
  return (

    <div className="resources-container">
      {ResourceData.map(documents =>
        <Link to={`/documents/${documents.id}`}>
            <div className="resource" >
              <span category={documents.category} className="category">{documents.category}</span>
              <DocumentPreview title={documents.title} shortDescription={documents.shortDescription} url={documents.url}/>
            </div>
        </Link>
      )}

    </div>

  )
}

export default Resources
