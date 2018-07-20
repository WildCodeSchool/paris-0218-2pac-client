import React from 'react'
import ChevronTitle from '../components/ChevronTitle'
import TiHome from 'react-icons/lib/ti/home'
import FaPhone from 'react-icons/lib/fa/phone'
import MdLaunch from 'react-icons/lib/md/launch'
import MdMailOutline from 'react-icons/lib/md/mail-outline'
import './ContactPage.css'

const ContactPage = ({ contactInfos }) =>
  <div id="contact-page" className="container">
    <h3><ChevronTitle title="Contacts"></ChevronTitle></h3>
    <div className="container-contact">
      <div className="find-us">
        <div className="sub-title">Nous trouver</div>
        <div className="find-us-content">
          <div><TiHome className="contact-icon" /></div>
          {contactInfos.address}
        </div>
      </div>
      <div className="contact-us">
        <div className="sub-title">Nous contacter</div>
        <div className="contact-us-content">
          <div>
            <MdLaunch className="contact-icon" /><a href={contactInfos.website} target="_blank">{contactInfos.website}</a>
          </div>
          <div>
            <FaPhone className="contact-icon" />
            {contactInfos.phone}
          </div>
          <div>
            <MdMailOutline className="contact-icon" />
            {contactInfos.mail}
          </div>
        </div>
      </div>
    </div>
  </div>

export default ContactPage
