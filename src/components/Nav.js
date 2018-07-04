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
              <li><Link to='presentation'>Présentation</Link></li>
              <li><Link to='historique'>Historique</Link></li>
              <li><Link to='nos-actions'>Nos actions</Link></li>
              <li><Link to='members-of-pac'>Nos membres</Link></li>
            </ul>
          </li>
          <li className="menu"><a>Comprendre la PAC</a>
            <ul className="submenu">
              <li><Link to='abc-de-la-pac'>L’ABC de la PAC</Link></li>
              <li><Link to='la-pac-ca-mimpacte'>La PAC, ça m’impacte ?</Link></li>
              <li><Link to='la-pac-20152020'>La PAC 2015-2020</Link></li>
              <li><Link to='reforme-de-la-pac'>La réforme de la PAC</Link></li>
              <li><Link to='chiffres-cles'>Chiffres-clés</Link></li>
              <li><Link to='sigles'>Sigles</Link></li>
            </ul>
          </li>
          <li className="menu"><a>Notre vision</a>
            <ul className="submenu">
              <li><Link to='orientations-communes'>Orientations communes</Link></li>
              <li><Link to='bilan-actuel'>Bilan de l’actuelle PAC</Link></li>
              <li><Link to='systeme-agro'>Système agro-alimentaire souhaité</Link></li>
              <li><Link to='priorite-2020'>12 priorités pour la PAC post 2020</Link></li>
              <li><Link to='PAAC'>PAAC souhaitée</Link></li>
            </ul>
          </li>
          <li className="menu"><a>Agir</a>
            <ul className="submenu">
              <li><Link to='nos-representants'>Interpeller ses représentants</Link></li>
              <li><Link to='become-member'>Devenir membre</Link></li>
              <li><Link to='events-participation'>Participer à un événement</Link></li>
            </ul>
          </li>
          <li className="menu"><a>Presse</a>
            <ul className="submenu">
              <li><Link to='on-parle-de-nous'>On parle de nous</Link></li>
              <li><Link to='communique-de-presse'>Communiqués de presse</Link></li>
              <li><Link to='press-kit'>Kit presse</Link></li>
            </ul>
          </li>
          <li className="menu"><a>▾&nbsp;&nbsp;&nbsp;Content in English <span role="img" aria-label="english-flag">🇬🇧</span></a>
            <ul className="submenu">
              <li><Link to='who-we-are'>Who we are</Link></li>
              <li><Link to='what-we-do'>What we do</Link></li>
              <li><Link to='what-we-want'>What we want</Link></li>
              <li><Link to='european-partners'>European Partners</Link></li>
              <li><Link to='cap-in-france'>The Cap in France</Link></li>
              <li><Link to='contact-us'>Contact Us</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
