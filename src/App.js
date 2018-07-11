import React, { Component } from 'react'
import { Router } from '@reach/router'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'

import Home from './containers/Home'
import ContactContainer from './containers/ContactContainer'
import ArticleContainer from './containers/ArticleContainer'
import ActualityContainer from './containers/ActualityContainer'
import ResourcesContainer from './containers/ResourcesContainer'
import NewsletterContainer from './containers/NewsletterContainer'

import Presentation from './components/content/Presentation'
import Historique from './components/content/Historique'
import NosActions from './components/content/NosActions'
import MembersOfPac from './components/content/MembersOfPac'
import AbcDeLaPac from './components/content/AbcDeLaPac'
import LaPacCaMimpacte from './components/content/LaPacCaMimpacte'
import LaPac20152020 from './components/content/LaPac20152020'
import ReformeDeLaPac from './components/content/ReformeDeLaPac'
import ChiffresCles from './components/content/ChiffresCles'
import Sigles from './components/content/Sigles'
import OrientationsCommunes from './components/content/OrientationsCommunes'
import BilanActuel from './components/content/BilanActuel'
import SystemeAgro from './components/content/SystemeAgro'
import Priorite2020 from './components/content/Priorite2020'
import PAAC from './components/content/PAAC'
import NosRepresentants from './components/content/NosRepresentants'
import BecomeMember from './components/content/BecomeMember'
import EventsParticipation from './components/content/EventsParticipation'
import OnParleDeNous from './components/content/OnParleDeNous'
import CommuniqueDePresse from './components/content/CommuniqueDePresse'
import PressKit from './components/content/PressKit'
import WhoWeAre from './components/content/WhoWeAre'
import WhatWeDo from './components/content/WhatWeDo'
import WhatWeWant from './components/content/WhatWeWant'
import EuropeanPartners from './components/content/EuropeanPartners'
import CapInFrance from './components/content/CapInFrance'
import ContactUs from './components/content/ContactUs'
import LegalNotice from './components/content/LegalNotice'

/* mocks */
import infoContact from './mocks/infoContact.json'

import api from './api.js'
import './App.css'

class App extends Component {
  state = {
    articles: [],
    documents: []
  }

  syncDatas = () => {
    api.getArticles().then(articles => { this.setState({ articles: articles }) })

    api.getDocuments().then(documents => { this.setState({ documents: documents }) })
  }

  componentDidMount () {
    this.syncDatas()
  }

  render () {
    return (
      <div>
        <Header />
        <div className="changing-content" >
          <Router>
            <Home path="/" articles={this.state.articles} />
            <ArticleContainer path="/article/:id" articles={this.state.articles} />
            <ActualityContainer path="/actuality" articles={this.state.articles} />
            <ResourcesContainer path="/resources" documents={this.state.documents} />
            <NewsletterContainer path="/newsletter" />
            <ContactContainer path="/contact" contactData={infoContact} />

            <Presentation path="/presentation" />
            <Historique path="/historique" />
            <NosActions path="/nos-actions" />
            <MembersOfPac path="/members-of-pac" />
            <AbcDeLaPac path="/abc-de-la-pac" />
            <LaPacCaMimpacte path="/la-pac-ca-mimpacte" />
            <LaPac20152020 path="/la-pac-20152020" />
            <ReformeDeLaPac path="/reforme-de-la-pac" />
            <ChiffresCles path='/chiffres-cles' />
            <Sigles path="/sigles" />
            <OrientationsCommunes path="/orientations-communes" />
            <BilanActuel path="/bilan-actuel" />
            <SystemeAgro path="/systeme-agro" />
            <Priorite2020 path="/priorite-2020" />
            <PAAC path="/PAAC" />
            <NosRepresentants path='/nos-representants' />
            <BecomeMember path='/become-member' />
            <EventsParticipation path='/events-participation' />
            <OnParleDeNous path='/on-parle-de-nous' />
            <CommuniqueDePresse path='/communique-de-presse' />
            <PressKit path='/press-kit' />
            {/* nos membres et legalNotice */}
            <WhoWeAre path="/who-we-are" />
            <WhatWeDo path="/what-we-do" />
            <WhatWeWant path="/what-we-want" />
            <EuropeanPartners path="/european-partners" />
            <CapInFrance path="/cap-in-france" />
            <ContactUs path="/contact-us" />
            <LegalNotice path="/legal-notice" />
          </Router>
          <SideBar />

        </div>
        <Footer />
      </div>
    )
  }
}

export default App
