import React, { Component } from 'react'
import Header from './Header'
import { store } from '../store'

class HeaderWrapper extends Component {
  constructor () {
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

export default HeaderWrapper
