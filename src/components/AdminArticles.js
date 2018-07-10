import React from 'react'
import api from '../api'
import './AdminArticles.css'
import { Link } from '@reach/router'

const AdminArticles = ({ articles }) => {
  return (
    <div>
    <Link to='/admin-articles'>Ajouter un article</Link>
      {articles.map(doc =>
        <div key={doc.id} className="admin-article" >
          <span>{doc.title}</span>
          <button onClick={()=>{api.updateDocument(articles.id)}}>Modifier</button>
          <button onClick={()=>{api.deleteDocument(articles.id)}}>Supprimer</button>
        </div>
      )}
    </div>
  )
}

export default AdminArticles
