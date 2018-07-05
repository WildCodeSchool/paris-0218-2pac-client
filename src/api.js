const hostUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'

const getArticles = () => fetch('/articles')
  .then(response => response.json())

const getDocuments = () => fetch('/documents')
  .then(response => response.json())

const getSubscribers = () => fetch('/subscribers')
  .then(response => response.json())

export default {
  hostUrl,
  getArticles,
  getDocuments,
  getSubscribers
}
