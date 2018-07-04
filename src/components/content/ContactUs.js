import React from 'react'
import './Content.css'
import Container from '../Container'

const ContactUs = ({children}) => {
  return (
    <div>
      <Container>
        <div class="fix-content-article">
        <h1>Contact us</h1>
        <p>For any question, please contact us by email at <a href="mailto:aurelie.catallo@pouruneautrepac.eu"> aurelie.catallo@pouruneautrepac.eu </a> or by phone: +33 180 89 99 51.</p>
        <p>English and German writing or speaking welcome!</p>
        </div>
      </Container>
    </div>
  )
}

export default ContactUs
