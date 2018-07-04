const getArticles = () => fetch('/articles')
  .then(response => response.json())

const getDocuments = () => fetch('/documents')
  .then(response => response.json())

export default {
  getArticles,
  getDocuments,
}
