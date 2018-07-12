import React from 'react'
import AdminArticles from '../components/AdminArticles'
import Container from '../components/Container'

const AdminArticlesContainer = ({ articles }) => {
  return (
    <AdminArticles articles={articles} />
  )
}

export default AdminArticlesContainer
