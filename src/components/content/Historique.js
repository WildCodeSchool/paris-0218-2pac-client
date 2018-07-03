import React from 'react'
import BulletedList from '../BulletedList.js'
import Container from '../Container'
import './Content.css'

const Historique = ({children}) => {
  return (
    <div>
      <Container>
        <div class="fix-content-article">
        <h1>Historique</h1>
        <p>En 2009, une association loi 1901 baptisée Groupe PAC 2013 est créée afin de peser sur les discussions entourant la préparation de la réforme 2013-2020 de la politique agricole commune (PAC).  Alors composée d’une quinzaine d’organisations membres, elle s’est faite progressivement reconnaitre par les décideur·euse·s politiques françai·se·s et européen·ne·s pour son expertise et sa représentativité.
        Quelques-unes des réalisations du Groupe PAC 2013 sont accessibles ci-dessous :</p>
        <ul>
          <li><BulletedList /> Réaction au bilan de santé de la PAC (25 février 2008)</li>
          <li><BulletedList /> Constats, propositions et leviers d'action pour une politique agricole, alimentaire, environnementale et rurale européenne (18 février 2010)</li>
          <li><BulletedList /> Propositions pour rémunérer les services environnementaux et socio-territoriaux associés à l'agriculture en ciblant les paiements directs pour relégitimer la PAC (7 septembre 2010)</li>
          <li><BulletedList /> Commentaire de la communication de la Commission européenne du 18 novembre 2010 intitulée « La PAC à l’horizon 2020 : alimentation, ressources naturelles et territoire – relever les défis de l’avenir » (6 juin 2011)</li>
          <li><BulletedList /> Analyse des propositions de la Commission européenne pour la réforme de la PAC (27 février 2012)</li>
          <li><BulletedList /> Analyse du « verdissement » de la PAC (avril 2012)</li>
          <p><BulletedList /> Désormais dénommée Pour une autre PAC, la plateforme s’est remobilisée en 2017, alors que les débats sur la réforme de la PAC post 2020 se sont ouverts. Elle poursuit son combat pour l’intégration de représentant·e·s de la société civile dans les arènes de négociation politique de la PAC.</p>
        </ul>
        </div>
      </Container>
    </div>
  )
}

export default Historique
