import React, { Component } from 'react'
import Login from './components/Login'
import Search from './components/Search'
import Nav from './components/Nav'

class App extends Component {
  render () {
    return (
      <div className="headerBlock">
        <div className="mainHeader">
          <img className="logo" src={ require('./img/logo_PAC_horizon_CMJN_CT_transp.png') } alt="logo" />
          <div className="blockSearchLogin">
            <Login />
            <Search />
          </div>
        </div>
        <div>
          <Nav onClick={() => console.log('yes')}/>
        </div>
      </div>
    )
  }
}

export default App
