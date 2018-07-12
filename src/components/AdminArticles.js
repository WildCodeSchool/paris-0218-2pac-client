import React from 'react'
import api from '../api'
import { Link } from '@reach/router'
import './AdminArticles.css'

const AdminArticles = ({ articles }) => {
  const deleteArticle = id => {
    api.deleteArticle(id).then(() => window.location = window.location)
  }

  return (
    <div>
      <Link to='/admin/articles/new'><button className="admin-articles-title"><span>Ajouter un article</span></button></Link>
      {articles.map(article =>
        <div key={article.id} className="admin-article" >
          <span>{article.title}</span>
          <button onClick={() => {}}>Modifier</button>
          <button onClick={() => deleteArticle(article.id)}>Supprimer</button>
        </div>
      )}
    </div>
  )
}

export default AdminArticles
