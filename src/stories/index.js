import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
/*
import { linkTo } from '@storybook/addon-links'
*/
import '../App.css'
import App from '../App'
import Login from '../components/Login'
import SideBar from '../components/SideBar'
import SideBarButton from '../components/SideBarButton'
import Footer from '../components/Footer'
import FooterMembersLogos from '../components/FooterMembersLogos'
import Container from '../components/Container'
import Tag from '../components/Tag'
import ChevronTitle from '../components/ChevronTitle'
import Article from '../components/Article'
import Contact from '../components/Contact'
import SignUpFormular from '../containers/SignUpFormular'
import Une from '../components/Une'
import ArticlePreview from '../components/ArticlePreview'


/* MOCKS IMPORT */
import infoContact from '../mocks/infoContact.json'
import mockedArticle from '../mocks/article.json'
import noImgArticle from '../mocks/noImgArticle.json'

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

storiesOf('Tag', module)
  .add('short name', () => <Tag tag={ { id: 1, name: 'web' } } />)
  .add('long name', () => <Tag tag={ { id: 1, name: 'agriculture' } } />)

storiesOf('Container', module)
  .add('Container for center content', () => <Container />)

storiesOf('Article', module)
  .add('basic article', () => <Article article={mockedArticle} />)
  .add('Article without img', () => <Article article={noImgArticle} />)

storiesOf('Contact', module)
  .add('Contact template', () => <Contact contactData={infoContact} />)

storiesOf('Une', module)
  .add('Articles à la une complet', () => <Une />)

storiesOf('ArticlePreview', module)
    .add('Preview des articles à la unes', () => <ArticlePreview />)
