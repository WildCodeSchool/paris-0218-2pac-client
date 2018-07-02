import React from 'react'
import BulletedList from '../BulletedList.js'
import './Content.css'
import ContainerForCreate from '../ContainerForCreate'

const Presentation = ({children}) => {
  return (
    <div>
      <ContainerForCreate>
        <h1>Présentation</h1>
        <p>Pour une autre PAC est une plateforme française inter-organisations constituant un espace commun de réflexion et d’action, en vue de la refonte de la politique agricole commune (PAC).</p>
        <p>Pour une autre PAC défend une révision complète de l’actuelle politique agricole commune en faveur d’une nouvelle politique agricole et alimentaire commune (PAAC) mise au service de tous les citoyen·ne·s, en conciliant des objectifs de : </p>
        <ul>
          <li><BulletedList /> Valorisation du métier de paysanne</li>
          <li><BulletedList /> Durabilité de l’agriculture</li>
          <li><BulletedList /> Souveraineté alimentaire</li>
          <li><BulletedList /> Respect du bien-être animal</li>
          <li><BulletedList /> Dynamisme du tissu rural</li>
          <li><BulletedList /> Cohérence avec le développement des paysannes du Sud</li>
          <li><BulletedList /> Lutte contre les changements climatique</li>
        </ul>
        <p>La plateforme <i>Pour une autre PAC</i> est constituée en association loi 1901, dont les statuts et le règlement intérieur sont disponibles ci-dessous.</p>
        <p>Statuts et règlement intérieur de <i>Pour une autre PAC</i></p>
        <p>Plaquette de présentation de la plateforme <i>Pour une autre PAC</i></p>
      </ContainerForCreate>
    </div>
  )
}

export default Presentation
