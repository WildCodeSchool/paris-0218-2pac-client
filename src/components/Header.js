import React from 'react'
import Login from './Login'
import Search from './Search'
import Nav from './Nav'
import './Header.css'
import logo from './../img/logo_horizon.png'

const Header = ({ menu }) => {
  return (
    <div className="headerBlock">
      <div className="mainHeader">
        <img className="logo" src={logo} alt="logo" />
        <div className="blockSearchLogin">
          <Login />
          <Search />
        </div>
      </div>
      <Nav />
    </div>
  )
}

export default Header
