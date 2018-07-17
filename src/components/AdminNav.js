import React from 'react'
import { Link } from '@reach/router'
import './AdminNav.css'

const AdminNav = () =>
  <div className='admin-nav'>
    <Link to='/admin/users' className='green-background card'>Utilisateurs</Link>
    <Link to='/admin/articles' className='green-background card'>Articles</Link>
    <Link to='/admin/documents' className='orange-background card'>Documents</Link>
    <Link to='/admin/subscribers' className='cherry-background card'>Abonnés</Link>
  </div>

export default AdminNav
