import React from 'react'
import './Content.css'
import Container from '../Container'
import BulletedList from '../BulletedList'

const OnParleDeNous = ({children}) => {
  return (
    <div>
      <Container>
        <div className="fix-content-article">
          <h1>On parle de nous</h1>
          <br/>
          <ul className="list-padding">
            <li><BulletedList /> <a href="http://www.arc2020.eu/french-german-alliance-cap-declaration/">ARC2020</a> (17 avril 2018)</li>
            <li><BulletedList /> <a href="https://www.humanite.fr/union-europeenne-une-pac-liberale-stop-ou-encore-653827">L’Humanité</a> (17 avril 2018)</li>
            <li><BulletedList /> <a href="http://www.lafranceagricole.fr/actualites/gestion-et-droit/pac-2020-un-plaidoyer-dong-franco-allemandes-pour-une-autre-pac-1,3,1887864349.html">La France Agricole</a> (16 avril 2018)</li>
            <li><BulletedList /> <a href="http://www.arc2020.eu/cap-france-not-delivering-for-citizens-farmers-environment/">ARC2020</a> (9 avril 2018)</li>
            <li><BulletedList /> <a href="https://mrmondialisation.org/la-pac-entretient-le-modele-agro-industriel/">Mr Mondialisation</a> (3 février 2018)</li>
            <li><BulletedList /> <a href="http://www.arc2020.eu/part-3-pour-une-autre-pac-wants-another-deal-between-farmers-and-society/">ARC 2020</a> (29 janvier 2018)</li>
            <li><BulletedList /> <a href="http://www.arc2020.eu/part-2-pour-une-autre-pac-frances-cap-position/">ARC 2020</a> (25 janvier 2018)</li>
            <li><BulletedList /> <a href="http://www.arc2020.eu/pour-une-autre-pac-french-cap-platform/">ARC 2020</a> (17 janvier 2018)</li>
            <li><BulletedList /> <a href="http://www.pleinchamp.com/actualites-generales/actualites/glyphosate-les-civam-assez-d-accord-avec-une-interdiction-dans-trois-ans">Plein champ</a> (8 janvier 2018)</li>
            <li><BulletedList /> <a href="http://www.rfi.fr/emission/20171224-2-actualite-environnementale-semaine">RFI</a>, émission « C’est pas du vent » (24 décembre 2017)</li>
            <li><BulletedList /> <a href="https://reporterre.net/Politique-agricole-commune-2020-le-bal-des-negociations-est-ouvert">Actu-environnement</a> (19 décembre 2017)</li>
            <li><BulletedList /> <a href="https://humanite.fr/politique-agricole-paysans-et-citoyens-veulent-semparer-de-la-pac-647481%20">L’Humanité</a> (19 décembre 2017)</li>
            <li><BulletedList /> <a href="http://agrafil.agrapresse.fr/index.php?option=com_abckiosque&amp;view=abckiosque&amp;task=download&amp;id=f8fe0e968cb4d42466974b19aa374faf&amp;l=affl.anYaJhCsk@ZdSrpabsbsneGbD.xyrrZuXrrmlaB&amp;p=C20ezCo5UUZuMPi4&amp;fic_id=1I0S713p%20">AgraPresse</a> (19 décembre 2017)</li>
            <li><BulletedList /> <a href="http://www.lafranceagricole.fr/actualites/pac-2020-ils-veulent-un-pacte-ala-place-de-la-pac-1,2,1961972881.html">La France Agricole</a> (18 décembre 2017)</li>
            <li><BulletedList /> <a href="https://www.actu-environnement.com/ae/news/aurelie-catallo-pac-agriculture-alimentation-30190.php4">Actu-environnement</a> (5 décembre 2017)</li>
            <li><BulletedList /> <a href="http://www.lafranceagricole.fr/actualites/gestion-et-droit/pac-2020-trente-organisations-unies-pour-peser-dans-les-debats-1,2,1300767425.html">La France Agricole</a> (28 novembre 2017)</li>
            <li><BulletedList /> <a href="https://www.alternatives-economiques.fr/bientot-une-nouvelle-pac/00080401">Alternatives économiques</a> (1<sup>er</sup> septembre 2017)</li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default OnParleDeNous
