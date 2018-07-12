import React from 'react'
import { Link } from '@reach/router'
import logo from './../img/logo_horizon.png'
import './Header.css'

const Header = ({ menu }) => {
  return (
    <div id="header">
      <Link to="/"><div id="header-logo" style={{ backgroundImage: `url(${logo})`}}/></Link>
    </div>
  )
}

export default Header
