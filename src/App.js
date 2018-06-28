import React, { Component } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import AsideLeft from './components/AsideLeft'
import './App.css'

class App extends Component {
  state: {
    articles: []
    }

  componentDidMount () {
    fetch('/auth/getArticles')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ articles: data })
      })
  }

  render () {
    console.log('render', this.state)

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
