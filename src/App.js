import React, { Component } from 'react'
import Login from './components/Login'
import Search from './components/Search'
import NavBar from './components/NavBar'

import './css/header.css'

class App extends Component {
  render () {
    return (
      <div>
        <div className="mainHeader">
          < Login />
          < Search />
        </div>
        <div>
          < NavBar />
        </div>
      </div>
    )
  }
}

export default App
