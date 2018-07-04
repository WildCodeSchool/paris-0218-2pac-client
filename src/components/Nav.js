import React from 'react'
import { Link } from '@reach/router'

import './Nav.css'

const Nav = ({ menu }) => {
  return (
    <div>
      <nav>
        <ul className='navbar'>
          <li><Link to='/'><span id='homeButton'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg></span></Link></li>
          <li className="menu"><a>Qui sommes nous ?</a>
            <ul className="submenu">
              <li><Link to='Presentation'>Présentation</Link></li>
              <li><Link to='Historique'>Historique</Link></li>
              <li><Link to='NosActions'>Nos actions</Link></li>
              <li><Link to='MembersOfPac'>Nos membres</Link></li>
            </ul>
          </li>
          <li className="menu"><a>Comprendre la PAC</a>
            <ul className="submenu">
              <li><Link to='AbcDeLaPac'>L’ABC de la PAC</Link></li>
              <li><Link to='LaPacCaMimpacte'>La PAC, ça m’impacte ?</Link></li>
              <li><Link to='LaPac20152020'>La PAC 2015-2020</Link></li>
              <li><Link to='ReformeDeLaPac'>La réforme de la PAC</Link></li>
              <li><Link to='ChiffresCles'>Chiffres-clés</Link></li>
              <li><Link to='Sigles'>Sigles</Link></li>
            </ul>
          </li>
          <li className="menu"><a>Notre vision</a>
            <ul className="submenu">
              <li><Link to='OrientationsCommunes'>Orientations communes</Link></li>
              <li><Link to='BilanActuel'>Bilan de l’actuelle PAC</Link></li>
              <li><Link to='SystemeAgro'>Système agro-alimentaire souhaité</Link></li>
              <li><Link to='Priorite2020'>12 priorités pour la PAC post 2020</Link></li>
              <li><Link to='PAAC'>PAAC souhaitée</Link></li>
            </ul>
          </li>
          <li className="menu"><a>Agir</a>
            <ul className="submenu">
              <li><Link to='NosRepresentants'>Interpeller ses représentants</Link></li>
              <li><Link to='BecomeMember'>Devenir membre</Link></li>
              <li><Link to='EventsParticipation'>Participer à un événement</Link></li>
            </ul>
          </li>
          <li className="menu"><a>Presse</a>
            <ul className="submenu">
              <li><Link to='OnParleDeNous'>On parle de nous</Link></li>
              <li><Link to='CommuniqueDePresse'>Communiqués de presse</Link></li>
              <li><Link to='PressKit'>Kit presse</Link></li>
            </ul>
          </li>
          <li className="menu"><a>▾&nbsp;&nbsp;&nbsp;Content in English <span role="img" aria-label="english-flag">🇬🇧</span></a>
            <ul className="submenu">
              <li><Link to='WhoWeAre'>Who we are</Link></li>
              <li><Link to='WhatWeDo'>What we do</Link></li>
              <li><Link to='WhatWeWant'>What we want</Link></li>
              <li><Link to='EuropeanPartners'>European Partners</Link></li>
              <li><Link to='CapInFrance'>The Cap in France</Link></li>
              <li><Link to='ContactUs'>Contact Us</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
