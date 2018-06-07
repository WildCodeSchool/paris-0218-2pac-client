import React, { Component } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import AsideLeft from './components/AsideLeft'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <SideBar />
        <AsideLeft />
        <Footer />
      </div>
    )
  }
}

export default App
