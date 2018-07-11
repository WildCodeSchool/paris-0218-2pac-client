import React from 'react'
import api from '../api'
import { Link } from '@reach/router'
import './AdminArticles.css'

const AdminArticles = ({ articles }) => {
  return (
    <div>
      <Link to='/admin/articles/new'><button className="admin-articles-title"><span>Ajouter un article</span></button></Link>
      {articles.map(doc =>
        <div key={doc.id} className="admin-article" >
          <span>{doc.title}</span>
          <button onClick={() => { api.updateDocument(articles.id) }}>Modifier</button>
          <button onClick={() => { api.deleteDocument(articles.id) }}>Supprimer</button>
        </div>
      )}
    </div>
  )
}

export default AdminArticles
