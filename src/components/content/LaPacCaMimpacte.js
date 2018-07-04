import React from 'react'
import './Content.css'
import Container from '../Container'
import BulletedList from '../BulletedList.js'

const LaPacCaMinpaqute = ({children}) => {
  return (
    <div>
      <Container>
        <div class="fix-content-article">
        <h1>La PAC, ça m’impacte ?</h1>
        <br/>
        <p>La Politique Agricole Commune (PAC) structure le modèle agro-alimentaire européen. Elle ne concerne pas uniquement les agriculteurs qui touchent des aides, mais bien chaque citoyen, en tant que mangeur, contribuable, électeur, promeneur, parent, etc.</p>
        <p>La politique agricole de l’UE a ainsi un impact direct sur biens des aspects de la vie quotidienne des citoyen·ne·s européen·ne·s :</p>
        <br/>
        <p></p>
        <ul>
          <li><BulletedList /><strong> Alimentation </strong>: La PAC détermine largement l’échelle de production des différents types de denrées alimentaires qui sont développées dans l’UE (par exemple en subventionnant davantage les grandes cultures que les fruits ou légumes frais). Elle structure aussi leur répartition géographique, poussant plutôt à la spécialisation des territoires. Après réforme, la PAC pourrait enfin pleinement inclure un volet sur l’éducation à l’alimentation des citoyen·ne·s européen·ne·s, en particulier des enfants.</li>
          <br/>
          <li><BulletedList /><strong> Santé publique </strong>: En favorisant certains types d’agriculture, la PAC a une influence sur la qualité de l’air et de l’eau (pouvant être dégradée par des émissions polluantes issues des engrais, des pesticides ou de l’élevage industriel), ainsi que sur la qualité sanitaire des aliments (positive en agroécologie, mais potentiellement négative si le produit contient des résidus de pesticides).</li>
          <br/>
          <li><BulletedList /><strong> Environnement </strong>: Les pratiques agricoles ont un impact majeur sur la biodiversité et le changement climatique. Les pratiques agricoles vertueuses nourrissent et hébergent une faune et une flore variées, s’adaptent au changement climatique, voire contribuent à l’atténuer, par exemple en développant l’agroforesterie ou en maintenant des prairies. A l’inverse, l’agriculture industrielle est néfaste pour l’environnement. Ainsi, par les choix d’orientation des subventions de la PAC au profit de certaines agricultures, elle peut soit représenter une menace pour l’environnement, soit une opportunité de restauration ou préservation.</li>
          <br/>
          <li><BulletedList /><strong> Paysages </strong>: C’est aux agriculteur·rice·s qu’on doit leur diversité, ou parfois au contraire leur monotonie, mais aussi leur entretien (sans lequel la forêt recouvrirait toutes les surfaces non construites). Actuellement, les agriculteur·rice·s ne sont pas rémunéré·e·s pour le service qu’ils ou elles rendent à la société pour les paysages.</li>
          <br/>
          <li><BulletedList /><strong> Place des paysan·ne·s dans la société </strong>: La PAC fonctionne par un transfert d’argent des contribuables européen·ne·s vers les paysan·ne·s, en reconnaissance de la place centrale qu’occupe leur activité pour la survie et le développement de la société. Elle constitue donc une forme de contrat entre bénéficiaires des paiements publics et bénéficiaires du travail des paysan·ne·s.</li>
          <br/>
          <li><BulletedList /><strong> Dynamisme des zones rurales </strong>: Le secteur agricole est fondamental pour conserver une population active dans les campagnes, que ce soit par les paysan·ne·s eux-mêmes, leurs salariés ou par tous les emplois créés par l’aval de la chaîne (transformation, commercialisation, distribution). La PAC est aussi directement impliquée dans le maintien ou le développement de services publics dans les zones rurales ou de leur connexion à internet.</li>
          <br/>
          <li><BulletedList /><strong> Bien-être animal </strong>: Les citoyen·ne·s européen·ne·s sont de plus en plus sensibles au bien-être des animaux d’élevage. Or une large majorité des élevages de l’UE bénéficient de subventions de la PAC. Cette dernière représente donc un levier important pour favoriser une meilleure prise en compte du bien-être animal par les éleveur·se·s européen·ne·s.</li>
          <br/>
          <li><BulletedList /><strong> Prix des denrées alimentaires </strong>: La PAC dessine les écarts de prix entre aliments sains (par exemple, les fruits et légumes ou les légumineuses produits en agroécologie) et ceux pouvant avoir un impact négatif sur la santé (sucre issu des betteraves, produits contenant de l’huile de palme importée, fruits et légumes contenant de nombreux résidus de pesticides, etc.)</li>
        </ul>
        </div>
      </Container>
    </div>
  )
}

export default LaPacCaMinpaqute
