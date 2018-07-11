const hostUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'

const getArticles = () => fetch('/articles')
  .then(response => response.json())

const getDocuments = () => fetch('/documents')
  .then(response => response.json())

const getSubscribers = () => fetch('/subscribers')
  .then(response => response.json())

// créer un article
const newArticle = article => fetch('/articles', {
  method: 'post',
  body: JSON.stringify(article),
  headers: {
    'Content-Type': 'application/json'
  },
  'credentials': 'include'
})

// éditer un article
const updateArticle = (id, article) => fetch(`/articles/${id}`, {
  method: 'put',
  body: JSON.stringify(article),
  headers: {
    'Content-Type': 'application/json'
  },
  'credentials': 'include'
})

// supprimer un article
const deleteArticle = (id, article) => fetch(`/articles/${id}`, {
  method: 'delete',
  body: JSON.stringify(article),
  headers: {
    'Content-Type': 'application/json'
  },
  'credentials': 'include'
})

export default {
  hostUrl,
  getArticles,
  getDocuments,
  getSubscribers,
  newArticle,
  updateArticle,
  deleteArticle
}
