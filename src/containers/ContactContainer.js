import React from 'react'
import Contact from '../components/Contact'
import SideBar from '../components/SideBar'

const ContactContainer = (props) => {
  return (

    <div className="router-container">
      <Contact contactData={props.contactData} />
    </div>

  )
}

export default ContactContainer
