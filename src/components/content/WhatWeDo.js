import React from 'react'
import './Content.css'
import Container from '../Container'

const WhatWeDo = ({children}) => {
  return (
    <div>
    <Container>
      <h1>Content in English - What we do</h1>
      <p><em>Pour une autre PAC </em>leads and coordinates collective work articulated around three axes:</p>
      <ul>
        <li>Forume. encouraging communication and engagement between the non-for-profit stakeholders in CAP-related topics:
          <ul>
            <li>building, adjusting and consolidating internal cohesion, including the goals, political orientations and strategy</li>
            <li>favoring the exchange of information between members as well as between European partners;</li>
            <li>encouraging complementarity within the platform and between it and European partners.</li>
          </ul>
        </li>
        <li>Advocacye. promote an ambitious reform of the CAP towards more sustainability, justice, and coherence:
          <ul>
            <li>making sure that the ideas <em>Pour une autre PAC </em>promotes are taken into account in the next CAP and in the French implementation processes;</li>
            <li>enhancing the role civil society plays in political discussions around the CAP;</li>
            <li>favouring inter-ministerial cooperation in the definition of the French position regarding the CAP.</li>
          </ul>
        </li>
        <li>Citizen mobilizatione. raise awareness in the general public about agricultural policy impacts:
          <ul>
            <li>helping people understand what’s important in agricultural policy;</li>
            <li>encouraging media coverage of CAP and CAP-related issues;</li>
            <li>engaging citizens in the CAP reform process.</li>
          </ul>
        </li>
      </ul>
      </Container>
    </div>
  )
}

export default WhatWeDo
