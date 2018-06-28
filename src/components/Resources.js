import React from 'react'
import DocumentPreview from './DocumentPreview'
import './Resources.css'
import { Link } from "@reach/router";

const Resources = ({ ResourceData }) => {
  return (

    <div>
      {ResourceData.map(documents =>

            <div className="resource" >
              <span url={documents.url} className="category">{documents.url}</span>
              <DocumentPreview title={documents.title} shortDescription={documents.shortDescription} url={documents.url}/>
            </div>

      )}

    </div>

  )
}

export default Resources
