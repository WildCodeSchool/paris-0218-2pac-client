console.log(`MOCKS`, process.env.REACT_APP_MOCKS)
const path = route => process.env.REACT_APP_MOCKS ? route + '.json' : route

const _fetch = route => fetch(path(route))

const getArticles = () => _fetch('/articles')
  .then(response => response.json())

const getDocuments = () => _fetch('/documents')
  .then(response => response.json())

export default {
  getArticles,
  getDocuments,
}
