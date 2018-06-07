import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
/*
import { linkTo } from '@storybook/addon-links'
*/

import Login from '../components/Login'
import Button from '../components/Button'
import Footer from '../components/Footer'
import FooterMembersLogos from '../components/FooterMembersLogos'
import Container from '../components/Container'
import Tag from '../components/Tag'
import Title from '../components/Title'
import BodyArticle from '../components/BodyArticle'
import IntroArticle from '../components/IntroArticle'
import Article from '../components/Article'
import Contact from '../components/Contact'


storiesOf('Footer', module)
  .add('Complete footer', () => <Footer />)

storiesOf('FooterMembersLogos', module)
  .add('Footer members logo section', () => <FooterMembersLogos />)

storiesOf('Login', module)
  .add('login text', () =>
    <div style={{background: 'black'}}>
      <Login />
    </div>)

storiesOf('Nav', module)
  .add('NavBar', () =>
    <Button className="Button Nav"> Edouard </Button>
  )

storiesOf('Button', module)
  .add('Dark green', () =>
    <Button onClick={action('clicked')} >
    Qui sommes nous?
    </Button>)
  .add('Yellow', () =>
    <Button onClick={action('clicked')} style={{ backgroundColor: '#F4971A' }} >
    Qui sommes nous?
    </Button>)
  .add('Light green', () =>
    <Button onClick={action('clicked')} style={{ backgroundColor: '#A99C2F' }} >
    Qui sommes nous?
    </Button>)
  .add('Red', () =>
    <Button onClick={action('clicked')} style={{ backgroundColor: '#731717' }} >
    Qui sommes nous?
    </Button>)

storiesOf('Title', module)
  .add('Title', () => <Title title="Exemple de titre"> </Title> )

storiesOf('IntroArticle', module)
  .add('Intro article', () => <IntroArticle /> )

storiesOf('BodyArticle', module)
  .add('Body of articles', () => <BodyArticle /> )

storiesOf('Tag', module)
  .add('Tag button for article', () => <Tag /> )

storiesOf('Container', module)
  .add('Container for center content', () => <Container /> )

storiesOf('Article', module)
  .add('Article template', () => <Article /> )

storiesOf('Contact', module)
  .add('Contact template', () => <Contact /> )
