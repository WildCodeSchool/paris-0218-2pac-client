import React from 'react'
import './Content.css'
import Container from '../Container'

const CommuniqeDePresse = ({children}) => {
  return (
    <div>
    <Container>
      <h1>Presse - Communiqués de presse</h1>
      <h2>Pour une autre PAC (depuis 2017)</h2>
      <ul>
        <li>Futur budget de la PAC (3 mai 2018)</li>
        <li>Déclaration commune avec nos homologues allemands (16 avril 2018)</li>
        <li>Relance de la plateforme <em>Pour une autre PAC </em>(28 novembre 2017)</li>
      </ul>
      <h2>Groupe PAC 2013 (2010 à 2014)</h2>
      <ul>
        <li>Mise en œuvre du verdissement en France (24 juillet 2014)</li>
        <li>Réaction au discours de Cournon (4 octobre 2013)</li>
        <li>Déclinaison de la PAC en France (30 septembre 2013)</li>
        <li>Vote en commission agriculture du Parlement européen (28 janvier 2013)</li>
        <li>Vers une sortie des références historiques en France (23 octobre 2012)</li>
        <li>Analyse de la Communication de la Commission européenne (26 novembre 2010)</li>
        <li>Analyse du projet de la Commission européenne pour la PAC post 2013 (18 octobre 2010)</li>
      </ul>
      </Container>
    </div>
  )
}

export default CommuniqeDePresse
