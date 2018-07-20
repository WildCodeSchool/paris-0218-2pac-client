import jwt from './jwt'

const defaultUrl = 'http://localhost:5000'
const hostUrl = process.env.REACT_APP_API_URL || defaultUrl
if (!process.env.REACT_APP_API_URL) {
  console.warn(`'REACT_APP_API_URL' environment variable is not set! -> fallback to default url: '${defaultUrl}'`)
}

const _fetch = (route, options = {}) => {
  const token = jwt.get()

  const headers = token
    ? { ...options.headers, 'Authorization': `JWT ${token}` }
    : options.headers

  return fetch(`${hostUrl}${route}`, {
    ...options,
    headers
  })
    .then(async res => {
      if (res.status >= 400) {
        const json = await res.json()

        throw Error(json.error || res.statusText)
      }

      return res.json()
    })
}

const whoami = () => _fetch('/whoami')

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

// USERS

const getUsers = () => _fetch('/users')

// ARTICLES

const getArticles = () => _fetch('/articles')

const newArticle = article => _fetch('/articles', {
  method: 'post',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(article)
})

const updateArticle = article => _fetch(`/articles/${article.id}`, {
  method: 'put',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(article)
})

const deleteArticle = id => _fetch(`/articles/${id}`, { method: 'delete' })

// DOCUMENTS

const getDocuments = () => _fetch('/documents')

const newDocument = doc => _fetch('/documents', {
  method: 'post',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(doc)
})

const updateDocument = doc => _fetch(`/documents/${doc.id}`, {
  method: 'put',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(doc)
})

const deleteDocument = id => _fetch(`/documents/${id}`, { method: 'delete' })

// SUBSCRIBERS

const getSubscribers = () => _fetch('/subscribers')

const newSubscriber = subscriber => _fetch('/subscribers', {
  method: 'post',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(subscriber)
})

export default {
  hostUrl,
  getUsers,
  getArticles,
  newArticle,
  updateArticle,
  deleteArticle,
  getDocuments,
  newDocument,
  updateDocument,
  deleteDocument,
  getSubscribers,
  newSubscriber,
  signIn,
  whoami,
  signOut
}
