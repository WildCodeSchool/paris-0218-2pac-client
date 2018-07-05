import React from 'react'
import './Content.css'
import Container from '../Container'
import BulletedList from '../BulletedList'

const WhatWeDo = ({children}) => {
  return (
    <div>
      <Container>
        <div className="fix-content-article">
          <h1>What we do</h1>
          <br/>
          <p><i>Pour une autre PAC</i>&nbsp;&nbsp;leads and coordinates collective work articulated around three axes:</p>
          <br/>
          <ul className="circle-list">
            <li><BulletedList />&nbsp;<b>Forum</b> i.e. encouraging communication and engagement between the non-for-profit stakeholders in CAP-related topics:
              <ul>
                <li>building, adjusting and consolidating internal cohesion, including the goals, political orientations and strategy</li>
                <li>favoring the exchange of information between members as well as between European partners;</li>
                <li>encouraging complementarity within the platform and between it and European partners.</li>
              </ul>
            </li>
            <br/>
            <li><BulletedList />&nbsp;<b>Advocacye</b> i.e. promote an ambitious reform of the CAP towards more sustainability, justice, and coherence:
              <ul>
                <li>making sure that the ideas <i>Pour une autre PAC </i>promotes are taken into account in the next CAP and in the French implementation processes;</li>
                <li>enhancing the role civil society plays in political discussions around the CAP;</li>
                <li>favouring inter-ministerial cooperation in the definition of the French position regarding the CAP.</li>
              </ul>
            </li>
            <br/>
            <li><BulletedList />&nbsp;<b>Citizen mobilizatione</b> i.e. raise awareness in the general public about agricultural policy impacts:
              <ul>
                <li>helping people understand what’s important in agricultural policy;</li>
                <li>encouraging media coverage of CAP and CAP-related issues;</li>
                <li>engaging citizens in the CAP reform process.</li>
              </ul>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default WhatWeDo
