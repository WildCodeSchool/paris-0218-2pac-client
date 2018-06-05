import React, { Component } from 'react'
import Header from './components/Header'
import { store } from './store'

class App extends Component {
  constructor() {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }
  render () {
    return (
      <div>
        <Header menu={this.state.menu}/>
      </div>
    )
  }
}

export default App
