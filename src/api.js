import jwt from './jwt'

const hostUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'

// Datas

const getArticles = () => fetch('/articles')
  .then(response => response.json())

const getDocuments = () => fetch('/documents')
  .then(response => response.json())

const getSubscribers = () => fetch('/subscribers')
  .then(response => response.json())

// AUTH

const authenticatedFetch = (route, options = {}) => {
  const token = jwt.get()

  if (!token) {
    return Promise.reject(Error(`missing token for authenticated fetch '${route}'`))
  }

  return fetch(route, {
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

  return authenticatedFetch('/whoami')
    .then(response => response.json())
}

const signIn = credentials => fetch('/signin', {
  method: 'post',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(credentials)
})
  .then(response => response.json())
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

export default {
  hostUrl,
  getArticles,
  getDocuments,
  getSubscribers,
  signIn,
  whoami,
  signOut
}
