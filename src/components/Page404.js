import React from 'react'
import Container from './Container'
import './Page404.css'
import { Link } from '@reach/router'

const Page404 = () => {
  return (

    <Container>
      <h1>La page que vous cherchez à afficher n'existe pas, malheureusement :( </h1>
      <Link to="/">
        <div className="return-home">
        Revenez à la page d'accueil !
        </div>
      </Link>

    </Container>

  )
}

export default Page404
