import React, { Component } from 'react'
import Login from './components/Login'
import Search from './components/Search'
import NavBar from './components/NavBar'

class App extends Component {
  render () {
    return (
      <div>
        < Login />
        < Search />
        < NavBar />
      </div>
    )
  }
}

export default App
