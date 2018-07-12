import React from 'react'
import api from '../api'
import { Link } from '@reach/router'
import './AdminArticles.css'

const AdminArticles = ({ articles }) => {
  return (
    <div>
      <Link to='/admin/articles/new'><button className="admin-articles-title"><span>Ajouter un article</span></button></Link>
      {articles.map(article =>
        <div key={article.id} className="admin-article" >
          <span>{article.title}</span>
          <button onClick={() => { api.updateArticle(article.id) }}>Modifier</button>
          <button onClick={() => { api.deleteArticle(article.id) }}>Supprimer</button>
        </div>
      )}
    </div>
  )
}

export default AdminArticles
