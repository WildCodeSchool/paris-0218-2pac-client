const hostUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'

// Datas

const getArticles = () => fetch('/articles')
  .then(response => response.json())

const getDocuments = () => fetch('/documents')
  .then(response => response.json())

const getSubscribers = () => fetch('/subscribers')
  .then(response => response.json())


// AUTH

// helpers

const LOCALSTORAGE_JWT = 'JWT'

const getToken = () => localStorage.getItem(LOCALSTORAGE_JWT)

const authenticatedFetch = (route, options = {}) => {
  const token = getToken()

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
  if (!getToken()) { return Promise.resolve({}) }

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

  localStorage.setItem(LOCALSTORAGE_JWT, token)

  return response
})

const signOut = () => {
  localStorage.removeItem(LOCALSTORAGE_JWT)
  return Promise.resolve()
}

export default {
  hostUrl,
  getArticles,
  getDocuments,
  getSubscribers,
  signIn,
  whoami,
  signOut,
}
