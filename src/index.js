import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import App from './App'
import AdminContainer from './containers/AdminContainer'
import Alert from 'react-s-alert'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'

ReactDOM.render(
  <div>
    <Router>
      <App path='/*' />
      <AdminContainer path='/admin/*' />
    </Router>
    <Alert stack={{limit: 3}} effect='slide' offset={30} />
  </div>, document.getElementById('root'))
registerServiceWorker()
