import React from 'react'
import Actuality from '../components/Actuality'

const ActualityContainer = (props) => {
  return (
    <div className="router-container">
      <Actuality ActuData={props.ActuData} />
    </div>

  )
}

export default ActualityContainer
