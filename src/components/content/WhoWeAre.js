import React from 'react'
import './Content.css'

const WhoWeAre = ({children}) => {
  return (
    <div className="container-content">
      <h1>Content in English - Who we are</h1>
      <p>The platform <em>Pour une autre PAC</em> (<em>For Another Common Agricultural Policy</em>) is a French inter-association body created for a common reflection and action in view of the reform of the Common Agricultural Policy.</p>

      <p>In 2007, an association named <em>Groupe PAC 2013</em> is created to weigh on the discussions surrounding the preparation of the 2013-2020 CAP reform. Then strong of 15 member organizations, it is progressively acknowledged by French and European political leaders for its expertise, and representativity.</p>
      <p>Now named <em>Pour une autre PAC</em>, the platform is again mobilized in 2017, as debates surrounding the post-2020 CAP reforms begin. With stronger ambitions and an increased number of members, it continues the fight for more durable, fair and coherent agricultural policies.</p>

      <p>The major strength of <em>Pour une autre PAC </em>is the common mobilization of dozens of associations, federations and syndicates, with various interests, around a common and specific goal: pushing for a positive reform of the CAP. There is no other such organization or structure in France working on the CAP.</p>
      <p><em>Pour une autre PAC </em>gathers around some thirty member organizations, structured in four categories. All work at national level and demonstrate a direct link between their domain of activity and the CAP.</p>
      <ul>
        <li>Farmer’s Organizations:
          <ul>
            <li><a href="https://www.confederationpaysanne.fr/">Confédération paysanne</a></li>
            <li><a href="http://www.agriculturepaysanne.org/">Fédérations des Associations pour le développement de l’emploi agricole et rural</a></li>
            <li><a href="http://www.fnab.org/">Fédération Nationale pour l’Agriculture Biologique</a></li>
            <li><a href="http://www.mrjc.org/">Mouvement rural de jeunesse chrétienne</a></li>
            <li><a href="http://www.civam.org/">Réseau CIVAM</a> (Centres d’Initiatives pour Valoriser l’Agriculture et Milieu rural)</li>
            <li><a href="https://terredeliens.org/">Terre de Liens</a></li>
            <li><a href="https://terre-humanisme.org/">Terre et Humanisme</a></li>
            <li><a href="https://www.unaf-apiculture.info/">Union Nationale de l’Apiculture Française</a></li>
          </ul>
        </li>
        <li>Environmental and Animal Welfare Organizations:
          <ul>
            <li><a href="https://www.agirpourlenvironnement.org/">Agir pour l’environnement</a></li>
            <li><a href="https://www.ciwf.fr/">Compassion In World Farming France</a></li>
            <li><a href="http://www.reseau-cen.org/">Fédération des Conservatoires d’Espaces Naturels</a></li>
            <li><a href="http://www.parcs-naturels-regionaux.fr/">Fédération des Parcs Naturels Régionaux</a></li>
            <li><a href="http://www.fondation-nature-homme.org/">Fondation pour la Nature et l’Homme</a></li>
            <li><a href="https://www.fne.asso.fr/">France Nature Environnement</a></li>
            <li><a href="https://www.generations-futures.fr/">Générations futures</a></li>
            <li><a href="https://www.greenpeace.fr/">Greenpeace</a></li>
            <li><a href="https://www.lpo.fr/">Ligue pour la Protection des Oiseaux</a></li>
            <li><a href="https://reseauactionclimat.org/">Réseau Action Climat</a></li>
            <li><a href="https://www.wwf.fr/">WWF</a></li>
          </ul>
        </li>
        <li>International Solidarity Organizations:
          <ul>
            <li><a href="http://www.peuples-solidaires.org/">Peuples solidaires – ActionAid France</a></li>
            <li><a href="http://www.agter.asso.fr/">Agter</a></li>
            <li><a href="https://france.attac.org/">Association pour la taxation des transactions financières et pour l’action citoyenne</a></li>
            <li><a href="http://www.cfsi.asso.fr/">Comité Français pour la Solidarité Internationale</a></li>
            <li><a href="https://www.isf-france.org/agrista">Ingénieurs sans Frontières Agrista</a></li>
            <li><a href="https://www.sol-asso.fr/">SOL</a></li>
          </ul>
        </li>
        <li>Citizens and Consumers Organizations:
          <ul>
            <li><a href="https://www.bioconsomacteurs.org/">Bio Consom’acteurs</a></li>
            <li><a href="http://cmr.cef.fr/">Chrétiens dans le monde rural</a></li>
            <li><a href="https://www.commercequitable.org/">Commerce équitable France</a></li>
            <li><a href="http://miramap.org/">Miramap</a></li>
            <li><a href="https://slowfood.fr/">Slow Food</a></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default WhoWeAre
