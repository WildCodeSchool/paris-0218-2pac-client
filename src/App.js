import React, { Component } from 'react'
import { Router, navigate } from '@reach/router'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'

import Home from './containers/Home'
import ContactContainer from './containers/ContactContainer'
import ArticleContainer from './containers/ArticleContainer'
import ActualityContainer from './containers/ActualityContainer'
import ResourcesContainer from './containers/ResourcesContainer'
import NewsletterContainer from './containers/NewsletterContainer'

import SearchResults from './components/SearchResults'

import Nav from './components/Nav'
import StaticContent from './components/StaticContent'

import AuthForm from './containers/AuthForm'


/* mocks */
import infoContact from './mocks/infoContact.json'
import staticContentMapping from './jsx/__mapping'

import api from './api.js'
import store from './store.js'

import './App.css'

const staticContentRoutes = Object.keys(staticContentMapping)
  .map((k, i) => <StaticContent key={i} path={`/${k}`} content={staticContentMapping[k]} />)

class App extends Component {
  state = {
    articles: [],
    documents: [],
    subscribers: []
  }

  onLoggedIn = user => {
    store.dispatch({ type: 'LOG_IN', as: user })
    window.location = window.location // reload datas
  }

  onLoggedOut = () => {
    store.dispatch({ type: 'LOG_OUT' })
    window.location = window.location // reload datas
  }

  onSearchSubmit = searchValue => {
    navigate(`/search/${searchValue}`)
  }

  syncDatas = () => {
    api.getArticles().then(articles => { this.setState({ articles: articles }) })

    api.getDocuments().then(documents => { this.setState({ documents: documents }) })
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())

    api.whoami().then(res => store.dispatch({ type: 'LOG_IN', as: res.user }))

    this.syncDatas()
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const { loggedAs } = store.getState()

    return (
      <div>
        <AuthForm loggedAs={loggedAs} onLoggedIn={this.onLoggedIn} onLoggedOut={this.onLoggedOut} />
        <Header />
        <Nav />
        <div id='app-content'>
          <div id='app-sidebar-left'></div>
          <div id='app-center' className='container'>
            <Router>
              <Home path="/" articles={this.state.articles} />
              <ArticleContainer path="/article/:id" articles={this.state.articles} />
              <ActualityContainer path="/actuality" articles={this.state.articles} />
              <ResourcesContainer path="/resources" documents={this.state.documents} />
              <NewsletterContainer path="/newsletter" />
              <ContactContainer path="/contact" contactData={infoContact} />

              <SearchResults path="/search/:searchValue" articles={this.state.articles} />

              {staticContentRoutes}
            </Router>
          </div>
          <div id='app-sidebar-right'>
            <SideBar articles={this.state.articles} onSearchSubmit={this.onSearchSubmit} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
