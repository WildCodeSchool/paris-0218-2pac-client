import React from 'react'
import Login from './Login'
import Search from './Search'
import Nav from './Nav'
import './Header.css'
import logoPAC from './../img/logo_horizon.png'

const Header = () => {
  return (
    <div className="headerBlock">
      <div className="mainHeader">
        <img className="logo" src={logoPAC} alt="logo" />

        <div className="blockSearchLogin">
          <Login />
          <Search />
        </div>

      </div>

      <div>
        <Nav />
      </div>

    </div>
  )
}

export default Header
