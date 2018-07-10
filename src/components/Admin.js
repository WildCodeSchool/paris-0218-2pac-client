import React, { Component } from 'react'
import { Router, Link } from '@reach/router'
import api from '../api'

import './Admin.css'

// import  from './AdminArticles.js'
// import ButtonAdminDocuments from './AdminDocuments.js'
// import Subscribers from './Subscribers.js'

const AdminHome = () => {
  return(
  <div className='admin-container'>
    <Link to='/admin/articles'>
      <div className='admin-link-to-articles'>
        <h1 className="green">Articles</h1>
      </div>
    </Link>
    <Link to='/admin/documents'>
      <div className='admin-link-to-articles'>
       <h1 className="orange">Documents</h1>
      </div>
    </Link>
    <Link to='/admin/subscribers'>
      <div className='admin-link-to-articles'>
       <h1 className="cherry">Subscribers</h1>
      </div>
    </Link>
  </div>
)}

class Admin extends Component {
  state = {
    articles: [],
    documents: [],
    subscribers: []
  }

  syncDatas = () => {
    api.getArticles()
      .then(articles => this.setState({ articles: articles }))
    api.getDocuments()
      .then(documents => this.setState({ documents: documents }))
    api.getSubscribers()
      .then(subscribers => this.setState({ subscribers: subscribers }))
  }

  componentDidMount () {
    this.syncDatas()
  }
  render () {
    return (
      <div className="App">

      <AdminHome/>
      {/*  <Router>

          <AdminArticles path='articles'/>
          <AdminDocuments path='documents/' />
          <AdminSubscribers path='subscribers/' />

        </Router>*/}
      </div>
    )
  }
}
export default Admin