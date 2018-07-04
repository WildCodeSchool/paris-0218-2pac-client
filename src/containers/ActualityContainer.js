import React from 'react'
import Actuality from '../components/Actuality'

const ActualityContainer = ({ articles }) => {
  return (
    <div className="router-container">
      <Actuality articles={articles} />
    </div>
  )
}

export default ActualityContainer
