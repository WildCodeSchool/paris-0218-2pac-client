import React from 'react'
import { Router, Link } from '@reach/router'
import Presentation from './content/Presentation'
import Historique from './content/Historique'
import NosActions from './content/NosActions'
import AbcDeLaPac from './content/AbcDeLaPac'
import LaPacCaMimpacte from './content/LaPacCaMimpacte'
import LaPac20152020 from './content/LaPac20152020'
import ReformeDeLaPac from './content/ReformeDeLaPac'
import Sigles from './content/Sigles'
import OrientationsCommunes from './content/OrientationsCommunes'
import BilanActuel from './content/BilanActuel'
import SystemeAgro from './content/SystemeAgro'
import Priorite2020 from './content/Priorite2020'
import PAAC from './content/PAAC'
import OnParleDeNous from './content/OnParleDeNous'
import CommuniqueDePresse from './content/CommuniqueDePresse'
import WhoWeAre from './content/WhoWeAre'
import WhatWeDo from './content/WhatWeDo'
import WhatWeWant from './content/WhatWeWant'
import EuropeanPartners from './content/EuropeanPartners'
import CapInFrance from './content/CapInFrance'
import ContactUs from './content/ContactUs'

import './Nav.css'

const Nav3 = ({ menu }) => {
  return (
    <div>
      <nav>
        <input type="checkbox" name="menu-mobile" role="button"/>
        <ul className='navbar'>
          <li className="menu"><a href="#">Qui sommes nous ?</a>
            <ul className="submenu">
              <li><Link to='Presentation'>Présentation</Link></li>
              <li><Link to='Historique'>Historique</Link></li>
              <li><Link to='NosActions'>Nos actions</Link></li>
              <li><Link to=''>Nos membres</Link></li>
            </ul>
          </li>
          <li className="menu"><a href="#">Comprendre la PAC</a>
            <ul className="submenu">
              <li><Link to='AbcDeLaPac'>L’ABC de la PAC</Link></li>
              <li><Link to='LaPacCaMimpacte'>La PAC, ça m’impacte ?</Link></li>
              <li><Link to='LaPac20152020'>La PAC 2015-2020</Link></li>
              <li><Link to='ReformeDeLaPac'>La réforme de la PAC</Link></li>
              <li><Link to=''>Chiffres-clés</Link></li>
              <li><Link to='Sigles'>Sigles</Link></li>
            </ul>
          </li>
          <li className="menu"><a href="#">Notre vision</a>
            <ul className="submenu">
              <li><Link to='OrientationsCommunes'>Orientations communes</Link></li>
              <li><Link to='BilanActuel'>Bilan de l’actuelle PAC</Link></li>
              <li><Link to='SystemeAgro'>Système agro-alimentaire souhaité</Link></li>
              <li><Link to='Priorite2020'>12 priorités pour la PAC post 2020</Link></li>
              <li><Link to='PAAC'>PAAC souhaitée</Link></li>
            </ul>
          </li>
          <li className="menu"><a href="#">Agir</a>
            <ul className="submenu">
              <li><Link to=''>Interpeller ses représentants</Link></li>
              <li><Link to=''>Devenir membre</Link></li>
              <li><Link to=''>Participer à un événement</Link></li>
            </ul>
          </li>
          <li className="menu"><a href="#">Presse</a>
            <ul className="submenu">
              <li><Link to='OnParleDeNous'>On parle de nous</Link></li>
              <li><Link to='CommuniqueDePresse'>Communiqués de presse</Link></li>
              <li><Link to=''>Kit presse</Link></li>
            </ul>
          </li>
          <li className="menu"><a href="#">Content in english</a>
            <ul className="submenu">
              <li><Link to=''>See you soon</Link></li>
              <li><Link to='WhoWeAre'>Who we are</Link></li>
              <li><Link to='WhatWeDo'>What we do</Link></li>
              <li><Link to='WhatWeWant'>What we want</Link></li>
              <li><Link to='EuropeanPartners'>European Partners</Link></li>
              <li><Link to='CapInFrance'>the cap in France</Link></li>
              <li><Link to='ContactUs'>Contact Us</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
      <Router>
        <Presentation path="Presentation" />
        <Historique path="Historique" />
        <NosActions path="NosActions" />
        <AbcDeLaPac path="AbcDeLaPac" />
        <LaPacCaMimpacte path="LaPacCaMimpacte" />
        <LaPac20152020 path="LaPac20152020" />
        <ReformeDeLaPac path="ReformeDeLaPac" />
        <Sigles path="Sigles" />
        <OrientationsCommunes path="OrientationsCommunes" />
        <BilanActuel path="BilanActuel" />
        <SystemeAgro path="SystemeAgro" />
        <Priorite2020 path="Priorite2020" />
        <PAAC path="PAAC" />
        {/* chiffre clé, interpeller ses représentants/devenir membre/participer a un évènement, kit de presse, see you soon */}
        <WhoWeAre path="WhoWeAre" />
        <WhatWeDo path="WhatWeDo" />
        <WhatWeWant path="WhatWeWant" />
        <EuropeanPartners path="EuropeanPartners" />
        <CapInFrance path="CapInFrance" />
        <ContactUs path="ContactUs" />
      </Router>
    </div>
  )
}

export default Nav3
