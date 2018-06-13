import React, { Component } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <SideBar />
        <Footer />
      </div>
    )
  }
}

export default App
