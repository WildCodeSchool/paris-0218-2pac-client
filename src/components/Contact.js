import React from 'react'
import Container from './Container'
import Title from './Title'
import './Contact.css'
import TiHome from 'react-icons/lib/ti/home'
import FaPhone from 'react-icons/lib/fa/phone'
import MdLaunch from 'react-icons/lib/md/launch'
import MdMailOutline from 'react-icons/lib/md/mail-outline'

const Contact = ( { contactData } ) => {
  return (

    <Container>
      <Title title="Contacts"></Title>

      <div className="container-contact">
        <div className="find-us">
          <div className="sub-title"> Nous trouver </div>
          <div className="find-us-content">
            <div> <TiHome className="contact-icon" /> </div>
              {contactData.address}
          </div>

        </div>

        <div className="contact-us">
          <div className="sub-title"> Nous contacter </div>
          <div className="contact-us-content">
            <div>
              <MdLaunch className="contact-icon" /> <a href="{contactData.website}"> {contactData.website} </a>
            </div>
            <div>
              <FaPhone className="contact-icon" /> {contactData.phone}
            </div>
            <div>
              <MdMailOutline className="contact-icon" /> {contactData.mail}
            </div>
          </div>
        </div>
      </div>

    </Container>

  )
}

export default Contact
