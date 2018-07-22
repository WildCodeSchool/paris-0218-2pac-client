export default [
  'abc-de-la-pac',
  'become-member',
  'bilan-actuel',
  'cap-in-france',
  'chiffres-cles',
  'communique-de-presse',
  'contact-us',
  'european-partners',
  'events-participation',
  'historique',
  'la-pac-2015-2020',
  'la-pac-ca-mimpacte',
  'legal-notice',
  'members-of-pac',
  'nos-actions',
  'nos-representants',
  'on-parle-de-nous',
  'orientations-communes',
  'paac',
  'presentation',
  'press-kit',
  'priorite-2020',
  'reforme-de-la-pac',
  'sigles',
  'systeme-agro',
  'what-we-do',
  'what-we-want',
  'who-we-are'
].reduce((acc, page) => {
  acc[page] = require(`./${page}.jsx`).default
  return acc
}, {})
