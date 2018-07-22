import React from 'react'
import api from '../api'
import { Link } from '@reach/router'

const byMostRecent = (a, b) => new Date(b.createdAt) - new Date(a.createdAt)

const AdminArticles = ({ articles }) => {
  const deleteArticle = id => {
    api.deleteArticle(id).then(() => { window.location = window.location })
  }

  return (
    <div id='admin-articles' className='container'>
      <Link to='/admin/articles/new'><button className="admin-new-button">Ajouter un article</button></Link>
      {articles.sort(byMostRecent).map(article =>
        <div key={article.id} className="admin-data-row">
          <span>{(new Date(article.createdAt)).toLocaleString().slice(0, -3)}</span>
          <span className="admin-data-title ml-2 bold">{article.title}</span>
          <Link className="admin-tool-button ml-2" to={`/admin/articles/edit/${article.id}`}><i className="far fa-edit"></i></Link>
          <span className="admin-tool-button ml-2" onClick={() => deleteArticle(article.id)}><i className="far fa-trash-alt" ></i></span>
        </div>
      )}
    </div>
  )
}

export default AdminArticles
