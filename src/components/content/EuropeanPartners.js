import React from 'react'
import './Content.css'
import Container from '../Container'
import BulletedList from '../BulletedList'

const EuropeanPartners = ({children}) => {
  return (
    <div>
      <Container>
        <div className="fix-content-article">
          <h1>European partners</h1>
          <br/>
          <p><i>Pour une autre PAC</i>&nbsp;partners with other civil society’s movements accross Europe for various projects:</p>
          <br/>
          <ul>
            <li><BulletedList /> at European level: <a href="http://www.goodfoodgoodfarming.eu/">Good Food Good Farming</a>, <a href="http://www.arc2020.eu/">ARC2020</a>, <a href="http://www.foeeurope.org/">Friends of the Earth Europe</a>, <a href="https://www.slowfood.com/sloweurope/en/">Slow Food Europe</a></li>
            <li><BulletedList /> in Germany: <a href="https://www.meine-landwirtschaft.de/">Meine Landwirtschaft</a> (devoted to citizen mobilization) and another platform (devoted to advocacy) co-chaired by <a href="https://www.bund.net/">BUND</a> and <a href="http://www.abl-ev.de/start/">AbL</a></li>
            <li><BulletedList /> in Germany, Poland and France: <a href="https://www.boell.de/">Heinrich-Böll Stiftung</a></li>
          </ul>
          <p>Some of our members are part of the following European networks:</p>
          <ul>
            <li><BulletedList /> <a href="https://viacampesina.org/fr/">European Coordination Via Campesina</a></li>
            <li><BulletedList /> <a href="http://www.ifoam-eu.org/">IFOAM Europe</a></li>
            <li><BulletedList /> <a href="http://www.accesstoland.eu/">Access to Land</a></li>
            <li><BulletedList /> <a href="http://www.europarc.org/">Europarc Federation</a></li>
            <li><BulletedList /> <a href="http://eeb.org/">European Environmental Bureau</a></li>
            <li><BulletedList /> <a href="http://www.birdlife.org/europe-and-central-asia">Birdlife</a></li>
            <li><BulletedList /> <a href="http://www.caneurope.org/">Climate Action Network Europe</a></li>
            <li><BulletedList /> <a href="https://concordeurope.org/">Concord Europe</a></li>
            <li><BulletedList /> <a href="https://www.attac.org/en/attac-europe">European Attac Network</a></li>
            <li><BulletedList /> <a href="https://wfto-europe.org/">World Fair Trade Organization Europe</a></li>
            <li><BulletedList /> <a href="https://urgenci.net/">Urgenci</a></li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default EuropeanPartners
