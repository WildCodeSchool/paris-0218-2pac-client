import React from 'react'
import Container from '../Container'
import BulletedList from '../BulletedList'
import './Content.css'

const MembersOfPac = ({children}) => {
  return (
    <div>
      <Container>
        <div className="fix-content-article">
          <h1>Nos membres</h1>
          <br/>
          <ul className="circle-list">
            <li><BulletedList /> Organisations paysannes :</li>
            <ul>
              <li> <a href="https://www.confederationpaysanne.fr/">Confédération paysanne</a></li>
              <li> <a href="http://www.agriculturepaysanne.org/">Fédérations des Associations pour le développement de l’emploi agricole et rural</a></li>
              <li> <a href="http://www.fnab.org/">Fédération Nationale pour l’Agriculture Biologique</a></li>
              <li> <a href="http://www.mrjc.org/">Mouvement rural de jeunesse chrétienne</a></li>
              <li> <a href="http://www.civam.org/">Réseau CIVAM</a> (Centres d’Initiatives pour Valoriser l’Agriculture et Milieu rural)</li>
              <li> <a href="https://terredeliens.org/">Terre de Liens</a></li>
              <li> <a href="https://terre-humanisme.org/">Terre et Humanisme</a></li>
              <li> <a href="https://www.unaf-apiculture.info/">Union Nationale de l’Apiculture Française</a></li>
            </ul>
            <br/>
            <li><BulletedList /> Organisations de protection de l’environnement et du bien-être animal :</li>
            <ul>
              <li> <a href="https://www.agirpourlenvironnement.org/">Agir pour l’environnement</a></li>
              <li> <a href="https://www.ciwf.fr/">Compassion In World Farming France</a></li>
              <li> <a href="http://www.reseau-cen.org/">Fédération des Conservatoires d’Espaces Naturels</a></li>
              <li> <a href="http://www.parcs-naturels-regionaux.fr/">Fédération des Parcs Naturels Régionaux</a></li>
              <li> <a href="http://www.fondation-nature-homme.org/">Fondation pour la Nature et l’Homme</a></li>
              <li> <a href="https://www.fne.asso.fr/">France Nature Environnement</a></li>
              <li> <a href="https://www.generations-futures.fr/">Générations futures</a></li>
              <li> <a href="https://www.greenpeace.fr/">Greenpeace</a></li>
              <li> <a href="https://www.lpo.fr/">LPO</a></li>
              <li> <a href="https://reseauactionclimat.org/">Réseau Action Climat</a></li>
              <li> <a href="https://www.wwf.fr/">WWF</a></li>
            </ul>
            <br/>
            <li> <BulletedList /> Organisations de solidarité internationale :</li>
            <ul>
              <li> <a href="http://www.peuples-solidaires.org/">Peuples solidaires – ActionAid France</a></li>
              <li> <a href="http://www.agter.asso.fr/">Agter</a></li>
              <li> <a href="https://france.attac.org/">ATTAC</a></li>
              <li> <a href="http://www.cfsi.asso.fr/">Comité Français pour la Solidarité Internationale</a></li>
              <li> <a href="https://www.isf-france.org/agrista">Ingénieurs sans Frontières Agrista</a></li>
              <li> <a href="https://www.sol-asso.fr/">SOL</a></li>
            </ul>
            <br/>
            <li> <BulletedList /> Organisations de citoyen·ne·s-consommateur·rices:</li>
            <ul>
              <li> <a href="https://www.bioconsomacteurs.org/">Bio Consom’acteurs</a></li>
              <li> <a href="http://cmr.cef.fr/">Chrétiens dans le monde rural</a></li>
              <li> <a href="https://www.commercequitable.org/">Commerce équitable France</a> </li>
              <li> <a href="http://miramap.org/">Miramap</a></li>
              <li> <a href="https://slowfood.fr/">Slow Food</a></li>
            </ul>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default MembersOfPac
