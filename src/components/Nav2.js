import React from 'react'
import QuiSommesNous from './QuiSommesNous'
import ComprendreLaPAC from './ComprendreLaPAC'
import NotreVision from './NotreVision'
import Agir from './Agir'
import Presse from './Presse'

import './Nav2.css'

const Nav2 = ({ menu }) => {
  return (
    <div className="NavContainer">
      <div className="Nav2">
        <QuiSommesNous />
        <ComprendreLaPAC />
        <NotreVision />
        <Agir />
        <Presse />
      </div>
    </div>
  )
}

export default Nav2
