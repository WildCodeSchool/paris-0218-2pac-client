import React, { Component } from 'react'
import { Router, Link } from '@reach/router'
import AdminNav from '../components/AdminNav'
import AdminArticles from '../components/AdminArticles'
import Header from '../components/Header'
import AdminDocuments from '../components/AdminDocuments'
import AdminSubscribers from '../components/AdminSubscribers'
import ArticleForm from '../components/ArticleForm'
import './AdminContainer.css'
import DocumentForm from '../components/DocumentForm'
import AuthForm from './AuthForm'
import store from '../store.js'
import api from '../api.js'

const AdminHome = () => <div></div>

const AdminArticleNew = () => <div><ArticleForm submitArticle={api.newArticle} /></div>

const AdminArticleEdit = ({ id, articles }) => {
  const article = articles.find(article => String(article.id) === id)

  return (
    <div>
      {article ? <ArticleForm article={article} submitArticle={api.updateArticle} /> : <div>Loading..</div>}
    </div>
  )
}

const AdminDocumentNew = (props) => <div><DocumentForm submitDocument={api.newDocument} /></div>

const AdminDocumentEdit = ({ id, documents }) => {
  const doc = documents.find(doc => String(doc.id) === id)

  return (
    <div>
      {doc ? <DocumentForm doc={doc} submitDocument={api.updateDocument} /> : <div>Loading..</div>}
    </div>
  )
}

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
                <AdminArticles path='articles' articles={this.state.articles} />
                <AdminArticleNew path='articles/new' />
                <AdminArticleEdit path='articles/edit/:id' articles={this.state.articles} />
                <AdminDocuments path='documents' documents={this.state.documents} />
                <AdminDocumentNew path='documents/new' />
                <AdminDocumentEdit path='documents/edit/:id' documents={this.state.documents} />
                <AdminSubscribers path='subscribers' subscribers={this.state.subscribers} />
              </Router>
            </div>
          </div>
          : <div className="container">
              <div>Vous devez vous connecter avec un compte <b>administrateur</b></div>
              <Link to="/"><button>Revenir à l'accueil</button></Link>
            </div>
        }
      </div>
    )
  }
}

export default AdminContainer
