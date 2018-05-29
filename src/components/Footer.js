import React, { Component } from 'react'
import logo from './img/logo_horizon.svg'
import './css/footer.css'
import FaChevronRight from 'react-icons/lib/fa/chevron-right'

export default class Footer extends Component {
  render () {
    return (
      <footer>

        <div className="footer-desc">

            <div className="logo"><img alt="logo" src={logo} /> </div>
            <div className="desc">
              <span> <FaChevronRight className='icon' /> POUR UNE AUTRE PAC </span> {"\n"}
              est une plateforme française inter-organisations{"\n"}
              constituant un espace commun de réflexion et d'action,{"\n"}
              en vue de la refonte de la politique agricole commune.
            </div>

        </div>

      </footer>
    )
  }
}
