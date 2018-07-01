import React from 'react'
import './Content.css'
import ContainerForCreate from '../ContainerForCreate'

const ContactUs = ({children}) => {
  return (
    <div>
    <ContainerForCreate>
      <h1>Contact us</h1>
      <p>For any question, please contact us by email at <a href="mailto:aurelie.catallo@pouruneautrepac.eu"> aurelie.catallo[@]pouruneautrepac.eu </a> or by phone: +33 180 89 99 51.</p>
      <p>English and German writing or speaking welcome!</p>
      </ContainerForCreate>
    </div>
  )
}

export default ContactUs
