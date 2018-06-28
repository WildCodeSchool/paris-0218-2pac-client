import React from 'react'
import './Nav.css'

const Nav3 = ({ menu }) => {
  return (
    <div>
      <nav>
        <input type="checkbox" name="menu-mobile" role="button"/>
        <ul className='navbar'>
          <li className="menu"><a href="#">Qui sommes nous ?</a>
            <ul className="submenu">
              <li><a href="#">Présentation</a></li>
              <li><a href="#">Historique</a></li>
              <li><a href="#">Nos actions</a></li>
              <li><a href="#">Nos membres</a></li>
            </ul>
          </li>
          <li className="menu"><a href="#">Comprendre la PAC</a>
            <ul className="submenu">
              <li><a href="#">L’ABC de la PAC</a></li>
              <li><a href="#">La PAC, ça m’impacte ?</a></li>
              <li><a href="#">La PAC 2015-2020</a></li>
              <li><a href="#">La réforme de la PAC</a></li>
              <li><a href="#">Chiffres-clés</a></li>
              <li><a href="#">Sigles</a></li>
            </ul>
          </li>
          <li className="menu"><a href="#">Notre vision</a>
            <ul className="submenu">
              <li><a href="#">Orientations communes</a></li>
              <li><a href="#">Bilan de l’actuelle PAC</a></li>
              <li><a href="#">Système agro-alimentaire souhaité</a></li>
              <li><a href="#">12 priorités pour la PAC post 2020</a></li>
              <li><a href="#">PAAC souhaitée</a></li>
            </ul>
          </li>
          <li className="menu"><a href="#">Agir</a>
            <ul className="submenu">
              <li><a href="#">Interpeller ses représentants</a></li>
              <li><a href="#">Devenir membre</a></li>
              <li><a href="#">Participer à un événeme</a></li>
            </ul>
          </li>
          <li className="menu"><a href="#">Presse</a>
            <ul className="submenu">
              <li><a href="#">On parle de nous</a></li>
              <li><a href="#">Communiqués de presse</a></li>
              <li><a href="#">Kit presse</a></li>
            </ul>
          </li>
          <li className="menu"><a href="#">Content in english</a>
            <ul className="submenu">
              <li><a href="#">See you soon</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav3
