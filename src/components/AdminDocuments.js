import React from 'react'
import api from '../api'
import './AdminDocuments.css'
import { Link } from '@reach/router'

const AdminDocuments = ({ documents }) => {
  const deleteDocument = id => {
    api.deleteDocument(id).then(() => window.location = window.location)
  }

  return (
    <div>
      <Link to='/admin/documents/new'><button className="admin-docs-title"><span>Ajouter un document</span></button></Link>
      {documents.map(doc =>
        <div key={doc.id} className="admin-document" >
          <span>{doc.title}</span>
          <button onClick={() => {}}>Modifier</button>
          <button onClick={() => deleteDocument(doc.id)}>Supprimer</button>
        </div>
      )}
    </div>
  )
}

export default AdminDocuments
