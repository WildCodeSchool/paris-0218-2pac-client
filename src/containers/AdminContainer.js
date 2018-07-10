import React, { Component } from 'react'
import { Router } from '@reach/router'

import api from '../api.js'
// import '../App.css'

const AdminHome = () => <div>Admin zone</div>
const AdminArticles = () => <div>Articles</div>
const AdminDocuments = () => <div>Documents</div>
const AdminSubscribers = () => <div>Subscribers</div>

class AdminAuth extends Component {
  state = {
    username: '',
    password: '',
    message: '',
    loggedAs: undefined,
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
      password: this.state.password,
    }

    api.signIn(credentials)
      .then(response => {
        if (response.error) {
          this.setState({ username: '', password: '', message: response.error })
          return
        }

        this.setState({ loggedAs: response.user })
      })
  }

  signout = e => {
    e.preventDefault()

    api.signOut()
      .then(() => this.setState({ loggedAs: undefined }))
  }

  componentDidMount () {
    api.whoami()
      .then(response => this.setState({ message: response.error || '', loggedAs: response.user }))
      .catch(console.log)
  }

  render () {
    return (
      <div>
      { this.state.loggedAs
        ?
        <div>
          <span>Logged as <strong>{this.state.loggedAs.username}</strong></span>
          <input type='button' value='Sign Out' onClick={this.signout}/>
        </div>
        :
        <div>
          <form onSubmit={this.signin}>
            <input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.handleChange} />
            <input type='password' placeholder='password' name='password' value={this.state.password} onChange={this.handleChange} />
            <input type='submit' value='Sign in' />
          </form>
          <div>{this.state.message}</div>
        </div>
      }
      </div>
    )
  }
}

class AdminContainer extends Component {

  state = {
    articles: [],
    documents: []
  }

  syncDatas = () => {
    api.getArticles().then(articles => { this.setState({ articles: articles }) })

    api.getDocuments().then(documents => { this.setState({ documents: documents }) })
  }

  componentDidMount () {
    this.syncDatas()
  }

  render () {
    return (
      <div>
        <AdminAuth />
        <Router>
          <AdminHome path="/" />
          <AdminArticles path='articles' />
          <AdminDocuments path='documents' />
          <AdminSubscribers path='subscribers' />
        </Router>
      </div>
    )
  }
}

export default AdminContainer
