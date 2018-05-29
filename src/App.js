import React, { Component } from 'react'
import AsideLeft from './components/AsideLeft.js'
import AsideRight from './components/AsideRight.js'

class App extends Component {
  render () {
    return (
      <div className="App">
        <AsideLeft />
        <AsideRight />
      </div>
      )
    }
  }

export default App;