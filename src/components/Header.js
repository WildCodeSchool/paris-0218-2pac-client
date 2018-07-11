import React from 'react'
import Nav from './Nav'
import './Header.css'
import logo from './../img/logo_horizon.png'

const Header = ({ menu }) => {
  return (
    <div id="header">
      <div id="header-logo" style={{ backgroundImage: `url(${logo})`}}/>
    </div>
  )
}

export default Header
