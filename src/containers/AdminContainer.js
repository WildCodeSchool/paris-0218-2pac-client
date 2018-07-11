import React, { Component } from 'react'
import { Router } from '@reach/router'

import api from '../api.js'
// import '../App.css'

const AdminHome = () => <div>Admin</div>
const AdminArticles = () => <div>Articles</div>
const AdminDocuments = () => <div>Documents</div>
const AdminSubscribers = () => <div>Subscribers</div>

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
      <Router>
        <AdminHome path="/" />
        <AdminArticles path='articles' />
        <AdminDocuments path='documents' />
        <AdminSubscribers path='subscribers' />
      </Router>
    )
  }
}

export default AdminContainer
