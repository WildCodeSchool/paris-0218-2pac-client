import React from 'react'
import { Link } from '@reach/router'

const Page404 = () =>
  <div id="404-page">
    <h1>La page que vous cherchez à afficher n'existe pas, malheureusement :( </h1>
    <Link className="link" to="/">Revenez à la page d'accueil !</Link>
  </div>

export default Page404
