import React, { Component } from 'react'
import { Router, Link } from "@reach/router";
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import AsideLeft from './components/AsideLeft'

import Home from './containers/Home'
import ContactContainer from './containers/ContactContainer'
import ArticleContainer from './containers/ArticleContainer'
import ActualityContainer from './containers/ActualityContainer'
import NewsletterContainer from './containers/NewsletterContainer'

/*mocks*/
import infoContact from './mocks/infoContact.json'
import arrayUne from './mocks/arrayUne.json'

import './App.css'

class App extends Component {
  state = {
    articles: []
  }

  componentDidMount () {
    /*fetch('/articlesCat')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ articles: data })
      })*/

    this.setState({ articles: arrayUne }) // todo : rm
  }

  render () {
    console.log('render', this.state)

    return (
      <div>
        <Header />

        <div className="changing-content" >
          <Router>

            <Home path="/" uneData={arrayUne} data={this.state.articles} />
            <ArticleContainer path="/article/:id" articles={this.state.articles} />
            <ActualityContainer path="/actuality" ActuData={this.state.articles} />
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
