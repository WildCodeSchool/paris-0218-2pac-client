import React from 'react'
import ScrollUp from '../containers/utils/ScrollUp'
import api from '../api'
import { Link } from '@reach/router'

const byMostRecent = (a, b) => new Date(b.createdAt) - new Date(a.createdAt)

const AdminDocuments = ({ documents }) => {
  const deleteDocument = id => {
    api.deleteDocument(id).then(() => { window.location = window.location })
  }

  return (
    <ScrollUp>
      <div id='admin-documents' className='container'>
        <Link to='/admin/documents/new'><button className="admin-new-button">Ajouter un document</button></Link>
        {documents.sort(byMostRecent).map(doc =>
          <div key={doc.id} className="admin-data-row">
            <span>{(new Date(doc.createdAt)).toLocaleString().slice(0, -3)}</span>
            <span className="admin-data-title ml-2 bold">{doc.title}</span>
            <span><a href={doc.url} target="_blank"><i className="far fa-eye"></i></a></span>
            <Link className="admin-tool-button ml-2" to={`/admin/documents/edit/${doc.id}`}><i className="far fa-edit"></i></Link>
            <span className="admin-tool-button ml-2" onClick={() => deleteDocument(doc.id)}><i className="far fa-trash-alt" ></i></span>
          </div>
        )}
      </div>
    </ScrollUp>
  )
}

export default AdminDocuments
