import React from 'react'
import Resources from '../components/Resources'
import Container from '../components/Container'


const ResourcesContainer = (props) => {

  return (
    <div className="router-container">
    <Container>
     <Resources ResourceData={props.ResourceData} />
    </Container>
    </div>

  )
}

export default ResourcesContainer
