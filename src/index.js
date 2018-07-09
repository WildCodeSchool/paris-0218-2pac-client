import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import App from './App'
import AdminContainer from './containers/AdminContainer'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
  <Router>
    <App path='/' />
    <AdminContainer path='/admin/*' />
  </Router>, document.getElementById('root'))
registerServiceWorker()
