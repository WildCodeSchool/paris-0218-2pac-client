import React from 'react'
import AsideLeft from '../components/AsideLeft'
import SideBar from '../components/SideBar'
import Une from '../components/Une'
import './RouterContainer.css'

const Home = (props) => {
  return (

    <div className="router-container">
      <AsideLeft />
      <Une uneData={props.uneData} />
    </div>

  )
}

export default Home
