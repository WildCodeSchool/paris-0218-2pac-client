import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
/*
import { linkTo } from '@storybook/addon-links'
*/

import App from '../App'
import Login from '../components/Login'
import SideBar from '../components/SideBar'
import SideBarButton from '../components/SideBarButton'
import Footer from '../components/Footer'
import FooterMembersLogos from '../components/FooterMembersLogos'
import Container from '../components/Container'
import Tag from '../components/Tag'
import ChevronTitle from '../components/ChevronTitle'
import BodyArticle from '../components/BodyArticle'
import IntroArticle from '../components/IntroArticle'
import Article from '../components/Article'
import Contact from '../components/Contact'
import SignUpFormular from '../containers/SignUpFormular'

/* MOCKS IMPORT*/
import infoContact from '../mocks/infoContact.json'

storiesOf('App', module)
  .add('Whole App', () => <App />)

storiesOf('Footer', module)
  .add('Complete footer', () => <Footer />)

storiesOf('FooterMembersLogos', module)
  .add('Footer members logo section', () => <FooterMembersLogos />)

storiesOf('Login', module)
  .add('login text', () =>
    <div style={{background: 'black'}}>
      <Login />
    </div>)

storiesOf('SideBar', module)
  .add('Classic', () => <SideBar />)

storiesOf('SideBarButton', module)
  .add('Dark green', () =>
    <SideBarButton onClick={action('clicked')} style={{ color: 'black' }}>
      Qui sommes nous?
    </SideBarButton>)
  .add('Yellow', () =>
    <SideBarButton onClick={action('clicked')} style={{ backgroundColor: '#F4971A' }} >
      Ressources
    </SideBarButton>)
  .add('Light green', () =>
    <SideBarButton onClick={action('clicked')} style={{ backgroundColor: '#A99C2F' }} >
      Actualités
    </SideBarButton>)
  .add('Red', () =>
    <SideBarButton onClick={action('clicked')} style={{ backgroundColor: '#731717' }} >
      English
    </SideBarButton>)

storiesOf('SignUpFormular', module)
  .add('Complete formular', () => <SignUpFormular />)

storiesOf('ChevronTitle', module)
  .add('ChevronTitle', () => <ChevronTitle title="Exemple de titre"> </ChevronTitle>)

storiesOf('IntroArticle', module)
  .add('Intro article', () => <IntroArticle />)

storiesOf('BodyArticle', module)
  .add('Body of articles', () => <BodyArticle />)

storiesOf('Tag', module)
  .add('Tag button for article', () => <Tag />)

storiesOf('Container', module)
  .add('Container for center content', () => <Container />)

storiesOf('Article', module)
  .add('Article template', () => <Article />)

storiesOf('Contact', module)
  .add('Contact template', () => <Contact contactData={infoContact} />)
