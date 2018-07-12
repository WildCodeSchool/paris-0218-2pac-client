import React from 'react'
import { Link } from '@reach/router'
import logo from './../img/logo_horizon.png'
import './Header.css'

const Header = ({ menu }) => {
  const style = { backgroundImage: `url(${logo})` }
  return (
    <div id="header">
      <Link to="/"><div id="header-logo" style={style}/></Link>
    </div>
  )
}

export default Header
