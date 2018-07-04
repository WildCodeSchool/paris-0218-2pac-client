import React from 'react'
import Nav from './Nav'
import './Header.css'
import logo from './../img/logo_horizon.png'

const Header = ({ menu }) => {
  return (
    <div className="headerBlock">
      <div className="mainHeader">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <Nav />
    </div>
  )
}

export default Header
