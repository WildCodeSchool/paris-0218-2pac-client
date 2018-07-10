import React, { Component } from 'react'
import { Router, Link } from '@reach/router'
import AdminHome from '../components/AdminHome'
import AdminArticles from '../components/AdminArticles'
import AdminDocuments from '../components/AdminDocuments'
import ArticleForm from '../components/ArticleForm'

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

const AdminSubscribers = () => <div>Subscribers</div>

const AdminArticleNew = (props) => <div><ArticleForm /></div>
const AdminArticleEdit = (props) => <div>AdminArticleEdit {props.id}</div>
const AdminDocumentNew = (props) => <div>AdminDocumentNew</div>
const AdminDocumentEdit = (props) => <div>AdminDocumentEdit {props.id}</div>

class AdminAuth extends Component {
  state = {
    username: '',
    password: '',
    message: ''
  }

  handleChange = e => {
    const { name: key, value } = e.target

    this.setState({ [key]: value })
  }

  signin = e => {
    e.preventDefault()

    this.setState({ message: '' })

    const credentials = {
      username: this.state.username,
      password: this.state.password
    }

    api.signIn(credentials)
      .then(response => {
        if (response.error) {
          this.setState({ message: response.error })
          return
        }

        this.setState({ username: '', password: '' })

        this.props.onLoggedIn(response.user) // todo: put in setState cb ?
      })
  }

  signout = e => {
    e.preventDefault()

    api.signOut().then(() => this.props.onLoggedOut())
  }

  render () {
    const { loggedAs } = this.props

    return (
      <div>
        { loggedAs
          ? <div>
            <span>Logged as <strong>{loggedAs.username}</strong></span>
            <input type='button' value='Sign Out' onClick={this.signout}/>
          </div>
          : <div>
            <form onSubmit={this.signin}>
              <input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.handleChange} />
              <input type='password' placeholder='password' name='password' value={this.state.password} onChange={this.handleChange} />
              <input type='submit' value='Sign in' />
              <span>{this.state.message}</span>
            </form>
          </div>
        }
      </div>
    )
  }
}

class AdminContainer extends Component {
  state = {
    loggedAs: undefined,
    users: [],
    articles: [],
    documents: []
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
  }

  onLoggedIn = user => {
    this.setState({ loggedAs: user })
  }

  onLoggedOut = () => {
    this.setState({ loggedAs: undefined })
  }

  componentDidMount () {
    this.syncDatas()

    api.whoami()
      .then(response => {
        if (response.error) {
          return console.log(response.error)
        }

        this.setState({ loggedAs: response.user })
      }).catch(console.log)
  }

  render () {
    const { loggedAs } = this.state

    return (
      <div>
        <div>
          <Link to='/admin'>ADMIN</Link>
          <AdminAuth loggedAs={loggedAs} onLoggedIn={this.onLoggedIn} onLoggedOut={this.onLoggedOut} />
        </div>
        { loggedAs && loggedAs.isAdmin
          ? <Router>
            <AdminHome path="/" />
            <AdminUsers path='users' users={this.state.users} />
            <AdminArticles path='articles' articles={this.state.articles} />
            <AdminArticleNew path='articles/new' />
            <AdminArticleEdit path='articles/:id' />
            <AdminDocuments path='documents' documents={this.state.documents} />
            <AdminDocumentNew path='documents/new' />
            <AdminDocumentEdit path='documents/:id' />
            <AdminSubscribers path='subscribers' />
          </Router>
          : <div>You must sign in with an admin account</div>
        }
      </div>
    )
  }
}

export default AdminContainer
