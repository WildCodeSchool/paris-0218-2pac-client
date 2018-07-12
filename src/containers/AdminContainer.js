import React, { Component } from 'react'
import { Router } from '@reach/router'
import AdminNav from '../components/AdminNav'
import AdminArticles from '../components/AdminArticles'
import Header from '../components/Header'
import AdminDocuments from '../components/AdminDocuments'
import AdminSubscribers from '../components/AdminSubscribers'
import ArticleForm from '../components/ArticleForm'

import AuthForm from './AuthForm'

import store from '../store.js'
import api from '../api.js'
// import '../App.css'

const User = ({ user }) =>
  <li>
    <span><strong>{user.username}</strong></span>
    <label> isAdmin<input type='checkbox' checked={user.isAdmin} readOnly /></label>
  </li>

const AdminUsers = ({ users }) => {
  const _users = users.map(user => <User key={user.id} user={user} />)

  return (
    <div>
      {_users}
    </div>
  )
}

const AdminHome = () => <div>Admin home</div>

const AdminArticleNew = (props) => <div><ArticleForm /></div>
const AdminArticleEdit = (props) => <div>AdminArticleEdit {props.id}</div>
const AdminDocumentNew = (props) => <div>AdminDocumentNew</div>
const AdminDocumentEdit = (props) => <div>AdminDocumentEdit {props.id}</div>

class AdminContainer extends Component {
  state = {
    loggedAs: undefined,
    users: [],
    articles: [],
    documents: [],
    subscribers: []
  }

  syncDatas = () => {
    api.getUsers()
      .then(users => { this.setState({ users: users }) })
      .catch(console.log)

    api.getArticles()
      .then(articles => { this.setState({ articles: articles }) })
      .catch(console.log)

    api.getDocuments()
      .then(documents => { this.setState({ documents: documents }) })
      .catch(console.log)

    api.getSubscribers()
      .then(subscribers => { this.setState({ subscribers: subscribers }) })
      .catch(console.log)
  }

  onLoggedIn = user => {
    store.dispatch({ type: 'LOG_IN', as: user })
    window.location = window.location // reload datas
  }

  onLoggedOut = () => {
    store.dispatch({ type: 'LOG_OUT' })
    window.location = window.location // reload datas
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
        { loggedAs && loggedAs.isAdmin
          ? <div>
            <AdminNav />
            <div id='admin-router-view'>
              <Router>
                <AdminHome path='/' />
                <AdminUsers path='users' users={this.state.users} />
                <AdminArticles path='articles' articles={this.state.articles} />
                <AdminArticleNew path='articles/new' />
                <AdminArticleEdit path='articles/:id' />
                <AdminDocuments path='documents' documents={this.state.documents} />
                <AdminDocumentNew path='documents/new' />
                <AdminDocumentEdit path='documents/:id' />
                <AdminSubscribers path='subscribers' subscribers={this.state.subscribers} />
              </Router>
            </div>
          </div>
          : <div>You must sign in with an admin account</div>
        }
      </div>
    )
  }
}

export default AdminContainer
