import React from 'react'
import Container from './Container'
import Title from './Title'
import './Contact.css'
import TiHome from 'react-icons/lib/ti/home'
import FaPhone from 'react-icons/lib/fa/phone'
import MdLaunch from 'react-icons/lib/md/launch'
import MdMailOutline from 'react-icons/lib/md/mail-outline'

const Contact = () => {
  return (

    <Container>
      <Title title="Contacts"></Title>

      <div className="container-contact">
        <div className="find-us">
          <div className="sub-title"> Nous trouver </div>
          <div className="find-us-content">
            <div> <TiHome className="contact-icon" /> </div>
              7 avenue Pasteur
              93100 Montreuil
              France
          </div>

        </div>

        <div className="contact-us">
          <div className="sub-title"> Nous contacter </div>
          <div className="contact-us-content">
            <div>
              <MdLaunch className="contact-icon" /> <a href="/"> www.pournuneautrepac.eu </a>
            </div>
            <div>
              <FaPhone className="contact-icon" /> +33 (0)1 80 89 99 51
            </div>
            <div>
              <MdMailOutline className="contact-icon" /> aurelie.catallo@pouruneautrepac.eu
            </div>
          </div>
        </div>
      </div>

    </Container>

  )
}

export default Contact
