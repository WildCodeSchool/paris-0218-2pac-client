import React from 'react'
import Resources from '../components/Resources'
import Container from '../components/Container'

const ResourcesContainer = ({ documents }) => {
  return (
    <div className="router-container">
      <Container>
        <Resources documents={documents} />
      </Container>
    </div>

  )
}

export default ResourcesContainer
