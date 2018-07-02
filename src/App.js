import React, { Component } from 'react'
import { Router } from '@reach/router'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'

import Home from './containers/Home'
import ContactContainer from './containers/ContactContainer'
import ArticleContainer from './containers/ArticleContainer'
import ActualityContainer from './containers/ActualityContainer'
import NewsletterContainer from './containers/NewsletterContainer'

/* mocks */
import infoContact from './mocks/infoContact.json'
import arrayUne from './mocks/arrayUne.json'

import './App.css'

class App extends Component {
  state = {
    articles: [],
    documents:[],
  }

  componentDidMount () {
    fetch('/articles')
      .then(response => response.json())
      .then(dbArticles => {
        this.setState({ articles: dbArticles })
      })

    fetch('/documents')
      .then(response => response.json())
      .then(dbDoc => {
        this.setState({ documents: dbDoc })
      })

  }

  render () {

    return (
      <div>
        <Header />

        <div className="changing-content" >
          <Router>

            <Home path="/" uneData={this.state.articles} data={this.state.articles} />
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
