import React from 'react'
import { Link } from '@reach/router'
import './NavBar.css'

const NavBar = () =>
  <nav className='navbar'>
    <ul className='navbar-items'>
      <li className="navbar-item">
        <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg></Link>
      </li>
      <li className="navbar-item">
        <a>Qui sommes nous ?</a>
        <ul className="navbar-dropdown">
          <Link className="navbar-dropdown-item" to='/presentation'>Présentation</Link>
          <Link className="navbar-dropdown-item" to='/historique'>Historique</Link>
          <Link className="navbar-dropdown-item" to='/nos-actions'>Nos actions</Link>
          <Link className="navbar-dropdown-item" to='/members-of-pac'>Nos membres</Link>
        </ul>
      </li>
      <li className="navbar-item">
        <a>Comprendre la PAC</a>
        <ul className="navbar-dropdown">
          <Link className="navbar-dropdown-item" to='/abc-de-la-pac'>L’ABC de la PAC</Link>
          <Link className="navbar-dropdown-item" to='/la-pac-ca-mimpacte'>La PAC, ça m’impacte ?</Link>
          <Link className="navbar-dropdown-item" to='/la-pac-2015-2020'>La PAC 2015-2020</Link>
          <Link className="navbar-dropdown-item" to='/reforme-de-la-pac'>La réforme de la PAC</Link>
          <Link className="navbar-dropdown-item" to='/chiffres-cles'>Chiffres-clés</Link>
          <Link className="navbar-dropdown-item" to='/sigles'>Sigles</Link>
        </ul>
      </li>
      <li className="navbar-item">
        <a>Notre vision</a>
        <ul className="navbar-dropdown">
          <Link className="navbar-dropdown-item" to='/orientations-communes'>Orientations communes</Link>
          <Link className="navbar-dropdown-item" to='/bilan-actuel'>Bilan de l’actuelle PAC</Link>
          <Link className="navbar-dropdown-item" to='/systeme-agro'>Système agro-alimentaire souhaité</Link>
          <Link className="navbar-dropdown-item" to='/priorite-2020'>12 priorités pour la PAC post 2020</Link>
          <Link className="navbar-dropdown-item" to='/paac'>PAAC souhaitée</Link>
        </ul>
      </li>
      <li className="navbar-item">
        <a>Agir</a>
        <ul className="navbar-dropdown">
          <Link className="navbar-dropdown-item" to='/nos-representants'>Interpeller ses représentants</Link>
          <Link className="navbar-dropdown-item" to='/become-member'>Devenir membre</Link>
          <Link className="navbar-dropdown-item" to='/events-participation'>Participer à un événement</Link>
        </ul>
      </li>
      <li className="navbar-item">
        <a>Presse</a>
        <ul className="navbar-dropdown">
          <Link className="navbar-dropdown-item" to='/on-parle-de-nous'>On parle de nous</Link>
          <Link className="navbar-dropdown-item" to='/communique-de-presse'>Communiqués de presse</Link>
          <Link className="navbar-dropdown-item" to='/press-kit'>Kit presse</Link>
        </ul>
      </li>
      <li className="navbar-item">
        <a>▾&nbsp;&nbsp;&nbsp;Content in English&nbsp;&nbsp;<span role="img" aria-label="english-flag">🇬🇧</span></a>
        <ul className="navbar-dropdown">
          <Link className="navbar-dropdown-item" to='/who-we-are'>Who we are</Link>
          <Link className="navbar-dropdown-item" to='/what-we-do'>What we do</Link>
          <Link className="navbar-dropdown-item" to='/what-we-want'>What we want</Link>
          <Link className="navbar-dropdown-item" to='/european-partners'>European Partners</Link>
          <Link className="navbar-dropdown-item" to='/cap-in-france'>The CAP in France</Link>
          <Link className="navbar-dropdown-item" to='/contact-us'>Contact Us</Link>
        </ul>
      </li>
    </ul>
  </nav>

export default NavBar
