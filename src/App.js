import React, { Component } from 'react'
import { Router, Link } from "@reach/router";
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'

import Home from './containers/Home'
import ContactContainer from './containers/ContactContainer'
import NewsletterContainer from './containers/NewsletterContainer'

/*mocks*/
import infoContact from './mocks/infoContact.json'
import article from './mocks/article.json'
import arrayUne from './mocks/arrayUne.json'

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

        <div className="changing-content" >
          <Router>
            <Home path="/" uneData={arrayUne} />
            <NewsletterContainer path="/newsletter" />
            <ContactContainer path="/contact" contactData={infoContact} />
          </Router>
          <SideBar />
        </div>

        <Footer />

      </div>
    )
  }
}

export default App
