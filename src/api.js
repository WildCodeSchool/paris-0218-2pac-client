import jwt from './jwt'

const hostUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'

const _fetch = (route, options = {}) => fetch(route, options)
  .then(async res => {
    if (res.status >= 400) {
      const json = await res.json()

      throw Error(json.error || res.statusText)
    }

    return res.json()
  })

_fetch.authenticated = (route, options = {}) => {
  const token = jwt.get()

  const headers = token
    ? { ...options.headers, 'Authorization': `JWT ${token}` }
    : options.headers

  return _fetch(route, {
    ...options,
    headers
  })
}

const whoami = () => _fetch.authenticated('/whoami')

const signIn = credentials => _fetch('/signin', {
  method: 'post',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(credentials)
})
  .then(response => {
    if (response.error) { return response }

    const { user, token } = response

    if (!token) { throw Error('Missing JWT in response!') }
    if (!user) { throw Error('Missing User in response!') }

    jwt.set(token)

    return response
  })

const signOut = () => {
  jwt.remove()

  return Promise.resolve()
}

// Datas

const getUsers = () => _fetch.authenticated('/users')

const getArticles = () => _fetch.authenticated('/articles')

const getDocuments = () => _fetch.authenticated('/documents')

const getSubscribers = () => _fetch.authenticated('/subscribers')

const deleteArticle = (id, articles) => fetch(`/articles/${id}`,
  {
    method: 'DELETE',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(articles)
  })
  .then(res => console.log(res.json()))

const deleteDocument = (id, documents) => fetch(`/documents/${id}`,
  {
    method: 'DELETE',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(documents)
  })
  .then(res => console.log(res.json()))

export default {
  hostUrl,
  getUsers,
  getArticles,
  getDocuments,
  getSubscribers,
  signIn,
  whoami,
  signOut,
  deleteArticle,
  deleteDocument
}
