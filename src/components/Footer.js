import React, { Component } from 'react'
import logo from './../img/logo_horizon.svg'
import './Footer.css'
import FaChevronRight from 'react-icons/lib/fa/chevron-right'
import FaCircle from 'react-icons/lib/fa/circle'
import FooterMembersLogos from './FooterMembersLogos'

export default class Footer extends Component {
  render () {
    return (
      <footer>
        <div className='footer-desc'>
          <div className='logo'><img alt='logo' src={logo} /> </div>
          <div className='desc'>
            <span> <FaChevronRight className='icon' /> POUR UNE AUTRE PAC </span>
            <span> est une plateforme française inter-organisations </span>
            <span>constituant un espace commun de réflexion et d'action,</span>
            <span>en vue de la refonte de la politique agricole commune.</span>
          </div>
        </div>

        <div className='members-container'>
          <div className='intro'> MEMBRES </div>
          <FooterMembersLogos />
        </div>

        <div className='mentions'> <a href='/'> <FaCircle /> Mentions légales <FaCircle /> </a> </div>
      </footer>
    )
  }
}
