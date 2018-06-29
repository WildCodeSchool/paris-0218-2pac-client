import React from 'react'
import './Content.css'
import Container from '../Container'

const Presentation = ({children}) => {
  return (
    <div>
    <Container>
      <h1>Présentation</h1>
      <p>Pour une autre PAC est une plateforme française inter-organisations constituant un espace commun de réflexion et d’action, en vue de la refonte de la politique agricole commune (PAC).</p>
      <p>Pour une autre PAC défend une révision complète de l’actuelle politique agricole commune en faveur d’une nouvelle politique agricole et alimentaire commune (PAAC) mise au service de tous les citoyen·ne·s, en conciliant des objectifs de : </p>
      <ul>
        <li>Valorisation du métier de paysanne</li>
        <li>Durabilité de l’agriculture</li>
        <li>Souveraineté alimentaire</li>
        <li>Respect du bien-être animal</li>
        <li>Dynamisme du tissu rural</li>
        <li>Cohérence avec le développement des paysannes du Sud</li>
        <li>Lutte contre les changements climatique</li>
      </ul>
      <p>La plateforme Pour une autre PAC est constituée en association loi 1901, dont les statuts et le règlement intérieur sont disponibles ci-dessous.</p>
      <p>Statuts et règlement intérieur de Pour une autre PAC</p>
      <p>Plaquette de présentation de la plateforme Pour une autre PAC</p>
      </Container>
    </div>
  )
}

export default Presentation
