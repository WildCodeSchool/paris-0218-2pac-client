import React, { Component } from 'react'
import { Router, navigate } from '@reach/router'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import Page404 from './components/Page404'

import StaticContent from './components/StaticContent'

import AuthForm from './containers/AuthForm'

import Home from './containers/Home'
import ContactPage from './containers/ContactPage'
import ArticlePage from './containers/ArticlePage'
import NewsPage from './containers/NewsPage'
import ResourcesPage from './containers/ResourcesPage'
import SubscribersPage from './containers/SubscribersPage'
import SearchResultsPage from './containers/SearchResultsPage'

import contactInfos from './datas/contact-infos.json'

import api from './api.js'
import store from './store.js'

import './App.css'

class App extends Component {
  state = {
    statics: [],
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
    api.getStatics().then(statics => { this.setState({ statics: statics }) })

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
        <NavBar />
        <div id='app'>
          <div id='app-content'>
            <Router>
              <Home path="/" articles={this.state.articles} />
              <ArticlePage path="/article/:id" articles={this.state.articles} />
              <NewsPage path="/news" articles={this.state.articles} />
              <ResourcesPage path="/resources" documents={this.state.documents} />
              <SubscribersPage path="/subscribe" />
              <ContactPage path="/contact" contactInfos={contactInfos} />
              <SearchResultsPage path="/search/:searchValue" articles={this.state.articles} />
              {this.state.statics.map(s => <StaticContent key={s.id} path={`/${s.slug}`} content={s.content} />)}
              <Page404 path="*" />
            </Router>
          </div>
          <div id='app-sidebar'>
            <SideBar articles={this.state.articles} onSearchSubmit={this.onSearchSubmit} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
