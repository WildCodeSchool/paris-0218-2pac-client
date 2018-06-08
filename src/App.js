import React, { Component } from 'react'
import HeaderWrapper from './components/HeaderWrapper'
import { store } from './store'

class App extends Component {

  render () {
    return (
      <div>
        <HeaderWrapper />
      </div>
    )
  }
}

export default App
