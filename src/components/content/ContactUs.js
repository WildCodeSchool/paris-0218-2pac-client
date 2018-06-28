import React from 'react'
import './Content.css'

const ContactUs = ({children}) => {
  return (
    <div className="container-content">
      <h1>Content in English - Contact us</h1>
      <p>For any question, please contact us by email at <a href="mailto:aurelie.catallo@pouruneautrepac.eu"> aurelie.catallo[@]pouruneautrepac.eu </a> or by phone: +33 180 89 99 51.</p>
      <p>English and German writing or speaking welcome!</p>
    </div>
  )
}

export default ContactUs
