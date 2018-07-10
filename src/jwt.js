const LOCALSTORAGE_JWT = 'JWT'

export default {
  set: token => localStorage.setItem(LOCALSTORAGE_JWT, token),
  get: () => localStorage.getItem(LOCALSTORAGE_JWT),
  remove: () => localStorage.removeItem(LOCALSTORAGE_JWT),
}
