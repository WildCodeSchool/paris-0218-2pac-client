import React from 'react'
import AdminArticles from '../components/AdminArticles'
import Container from '../components/Container'

const AdminArticlesContainer = ({ AdminArticles }) => {
  return (
    <div className="router-container">
      <Container>
        <AdminArticles articles={articles} />
      </Container>
    </div>

  )
}

export default AdminArticlesContainer
