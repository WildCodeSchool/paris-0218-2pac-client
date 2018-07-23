import React, { Component } from 'react'
import { Router, Link } from '@reach/router'
import Header from '../components/Header'
import AdminNav from '../components/AdminNav'
import AdminArticles from '../components/AdminArticles'
import AdminStatics from '../components/AdminStatics'
import AdminDocuments from '../components/AdminDocuments'
import AdminSubscribers from '../components/AdminSubscribers'
import ArticleForm from '../components/ArticleForm'
import StaticForm from '../components/StaticForm'
import DocumentForm from '../components/DocumentForm'
import AuthForm from './AuthForm'
import store from '../store.js'
import api from '../api.js'
import './AdminContainer.css'

const AdminHome = () =>
  <div className='container'>
    <h3>Bienvenue dans la zone administrable</h3>
  </div>

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

const AdminStaticEdit = ({ id, statics }) => {
  const _static = statics.find(s => String(s.id) === id)

  return (
    <div>
      {_static ? <StaticForm static={_static} submitStatic={api.updateStatic} /> : <div>Loading..</div>}
    </div>
  )
}

class AdminContainer extends Component {
  state = {
    loggedAs: undefined,
    users: [],
    statics: [],
    articles: [],
    documents: [],
    subscribers: []
  }

  syncDatas = () => {
    api.getUsers().then(users => { this.setState({ users }) }).catch(console.log)

    api.getStatics().then(statics => { this.setState({ statics }) }).catch(console.log)

    api.getArticles().then(articles => { this.setState({ articles }) }).catch(console.log)

    api.getDocuments().then(documents => { this.setState({ documents }) }).catch(console.log)

    api.getSubscribers().then(subscribers => { this.setState({ subscribers }) }).catch(console.log)
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
            <div id='admin-content'>
              <Router>
                <AdminHome path='/' />
                <AdminStatics path='statics' statics={this.state.statics} />
                <AdminStaticEdit path='statics/edit/:id' statics={this.state.statics} />
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
