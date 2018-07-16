import React from 'react'
import api from '../api'
import { Link } from '@reach/router'
import './AdminDocuments.css'

const AdminDocuments = ({ documents }) => {
  const deleteDocument = id => {
    api.deleteDocument(id).then(() => { window.location = window.location })
  }

  return (
    <div>
      <Link to='/admin/documents/new'><button className="admin-docs-title"><span>Ajouter un document</span></button></Link>
      {documents.map(doc =>
        <div key={doc.id} className="admin-document" >
          <span>{doc.title}</span>
          <Link to={`/admin/documents/edit/${doc.id}`}><button>Modifier</button></Link>
          <button onClick={() => deleteDocument(doc.id)}>Supprimer</button>
        </div>
      )}
    </div>
  )
}

export default AdminDocuments
