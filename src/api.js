import jwt from './jwt'

const hostUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'

const _fetch = (route, options = {}) => {
  const token = jwt.get()

  const headers = token
    ? { ...options.headers, 'Authorization': `JWT ${token}` }
    : options.headers

  return fetch(route, {
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

// Datas

const getUsers = () => _fetch('/users')

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

const getDocuments = () => _fetch('/documents')

const toFormData = json => {
  const formData = new FormData()

  for (const [ key, value ] of Object.entries(json)) {
    formData.set(key, value)
  }

  return formData
}

const newDocument = doc => _fetch('/documents', {
  method: 'post',
  body: toFormData(doc)
})

const updateDocument = doc => _fetch(`/documents/${doc.id}`, {
  method: 'put',
  body: toFormData(doc)
})

const deleteDocument = id => _fetch(`/documents/${id}`, { method: 'delete' })

const getSubscribers = () => _fetch('/subscribers')

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
  signIn,
  whoami,
  signOut
}
