import React from 'react'
import Contact from '../components/Contact'

const ContactContainer = (props) => {
  return (
    <Contact contactData={props.contactData} />
  )
}

export default ContactContainer
