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

  if (!token) {
    return Promise.reject(Error(`missing token for authenticated fetch '${route}'`))
  }

  return _fetch(route, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `JWT ${token}`
    }
  })
}

const whoami = () => {
  const token = jwt.get()

  if (!token) { return Promise.resolve({}) }

  return _fetch.authenticated('/whoami')
}

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

const getArticles = () => _fetch('/articles')

const getDocuments = () => _fetch('/documents')

const getSubscribers = () => _fetch('/subscribers')

// const deleteDocument = (documentId) => fetch('/documents')
// .then(() => res.json('ok'))
// .catch(next)

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
  getUsers,
  getArticles,
  getDocuments,
  getSubscribers,
  newArticle,
  updateArticle,
  deleteArticle
  signIn,
  whoami,
  signOut
}
