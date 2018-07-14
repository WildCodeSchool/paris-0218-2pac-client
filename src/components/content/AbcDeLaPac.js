import React from 'react'
import Container from '../Container'
import './Content.css'
import BulletedList from '../BulletedList.js'

const AbcDeLaPac = ({children}) => {
  return (
    <div>
      <Container>
        <div className="fix-content-article">
          <h1>L’ABC de la PAC</h1>
          <br/>
          <p>La Politique Agricole Commune est une politique de l’Union européenne dédiée à l’agriculture et au développement rural. Elle est en place depuis 1962. Elle visait à l’époque à développer la production agricole afin de nourrir les Européen·ne·s à la sortie de la deuxième guerre mondiale. Pour cela, trois outils principaux ont été introduits pour stimuler l’agriculture européenne : les taxes à l’importation (effet dissuasif sur les importations), la garantie des prix aux agriculteur·rice·s (effet incitatif sur la production) et les restitutions aux exportations (effet incitatif sur l’exportation). Elle a vite atteint son objectif d’augmenter la production européenne, puis a atteint un effet pervers : la surproduction. La PAC constituait alors le premier poste de dépense de l’UE et son coût augmentait en même temps que la surproduction.</p>

          <p>Depuis, la PAC a connu de nombreuses réformes, dont une très importante en 1992. Ces réformes ont changé ses logiques d’intervention et l’ont mise en conformité avec les règles de l’Organisation mondiale du commerce. La dernière en date remonte à 2014 et la prochaine devrait entrer en vigueur en 2021. Aujourd’hui, la PAC représente environ 40% du budget européen. Elle demeure la politique la plus intégrée de l’UE, c’est-à-dire celle qui est le plus décidé de manière commune au niveau européen.</p>

          <p>La PAC est divisée en trois parties, qui ont chacune des objectifs et des modes de fonctionnement différents :</p>
          <br/>
          <div>
            <ul>
              <li><BulletedList /> Le premier pilier représente 70% du budget de la PAC. Il attribue des aides dites directes aux agriculteur·rice·s. Ces aides consistent en un revenu de base qui n’est pas lié à ce qu’ils ou elles produisent ni comment ils ou elles produisent, mais à la surface qu’ils ou elles exploitent et à leur potentiel de productivité.</li>
              <li><BulletedList /> Le deuxième pilier porte sur le développement rural. Il a la particularité d’être co-financé par de l’argent européen et de l’argent national (venant de l’États, des collectivités territoriales, ou encore des agences de l’eau). Il apporte un soutien complémentaire aux agriculteur·rice·s en situation de désavantage compétitif du fait de la zone géographique dans laquelle ils ou elles sont situé·e·s, de leurs pratiques ou du démarrage de leur activité. Il accompagne aussi l’évolution des fermes vers plus de compétitivité ou une meilleure prise en compte de l’environnement.</li>
              <li><BulletedList /> L’organisation commune des marchés régit les interventions de l’UE sur les marchés de produits agricoles en cas de crise et appuie la structuration de certaines filières. Elle sert aussi de garde-fou aux importations et exportations de produits agricoles. Les agriculteur·rice·s e touchent pas d’aides par le biais de l’organisation commune des marchés.</li>
            </ul>
          </div>
          <br/>
          <p>En France, la PAC est gérée par le ministère en charge de l’agriculture, ainsi qu’en partie par les Régions pour ce qui relève du développement rural. La France est l’État membre de l’UE qui bénéficie le plus du budget de la PAC : elle reçoit environ 9 milliards d’euros par an. Ces aides sont très majoritairement versées aux agriculteur·rice·s français·es, mais une toute petite partie est également allouée à des acteur·rice·s du secteur forestier, à des structures d’animation territoriale en zones rurales, ainsi qu’à des groupements chargés de la commercialisation de certains types de produits.</p>
          <br/>
          <p>Pour plus d’informations sur les fondamentaux de la PAC, vous pouvez consulter le <u>Guide de la PAC</u> réalisée par la plateforme en 2011, ainsi que vous reportez aux sites suivants :</p>
          <ul>
            <li><BulletedList /> <a href="https://www.supagro.fr/capeye/histoire-de-la-pac">https://www.supagro.fr/capeye</a></li>
            <li><BulletedList /> <a href="http://www.vie-publique.fr/decouverte-institutions/union-europeenne/action/politiques-communautaires/qu-est-ce-que-politique-agricole-commune-pac.html">http://www.vie-publique.fr</a></li>
            <li><BulletedList /> <a href="https://www.touteleurope.eu/actualite/l-agriculture-et-la-peche-dans-l-union-europeenne.html">https://www.touteleurope.eu</a></li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default AbcDeLaPac
