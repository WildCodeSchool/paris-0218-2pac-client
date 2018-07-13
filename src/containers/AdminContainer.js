import React, { Component } from 'react'
import { Router } from '@reach/router'
import AdminNav from '../components/AdminNav'
import AdminArticles from '../components/AdminArticles'
import Header from '../components/Header'
import AdminDocuments from '../components/AdminDocuments'
import AdminSubscribers from '../components/AdminSubscribers'
import ArticleForm from '../components/ArticleForm'
import './AdminContainer.css'

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

const mockedArticle = {
  title: "Les chatons",
  shortDescription: "les chatons c'est trop mignons",
  description: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<h1>Les chatons</h1>\n<p><img src=\"https://www.vulgaris-medical.com/sites/default/files/field/image/actualites/2018/02/26/le-chat-source-de-bienfaits-pour-votre-sante_1.jpg\" alt=\"petits chatons\" width=\"295\" height=\"221\" /></p>\n<p>trop mignons!</p>\n</body>\n</html>",
  eventDate: '2018-10-02',
  categoryId: 4,
  imageURL: "https://kocipunkt.whiskas.pl/upload/2016/07/ZYWIENIE_Podstawy_%C5%BCywienia_koci%C4%85t.png",
  imageDescription: "petits chatons",
  isMemberOnly: true
}

const AdminArticleNew = () => <div><ArticleForm submitArticle={api.newArticle} /></div>

const AdminArticleEdit = ({ id, articles }) => {

  const article = articles.find(article => article.id == id)

  return (
    <div>
      {article ? <ArticleForm article={article} submitArticle={api.updateArticle} /> : <div>Loading..</div>}
    </div>
  )
}


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
            <div id='admin-router-view' className="admin-general-container">
              <Router>
                <AdminHome path='/' />
                <AdminUsers path='users' users={this.state.users} />
                <AdminArticles path='articles' articles={this.state.articles} />
                <AdminArticleNew path='articles/new' />
                <AdminArticleEdit path='articles/edit/:id' articles={this.state.articles} />
                <AdminDocuments path='documents' documents={this.state.documents} />
                <AdminDocumentNew path='documents/new' />
                <AdminDocumentEdit path='documents/edit/:id' />
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
