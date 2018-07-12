import React from 'react'
import { Link } from '@reach/router'
import './AdminNav.css'

const AdminNav = () =>
  <div className='admin-nav'>
    <Link to='/admin/users' className='green card'>Users</Link>
    <Link to='/admin/articles' className='green card'>Articles</Link>
    <Link to='/admin/documents' className='orange card'>Documents</Link>
    <Link to='/admin/subscribers' className='cherry card'>Subscribers</Link>
  </div>

export default AdminNav
