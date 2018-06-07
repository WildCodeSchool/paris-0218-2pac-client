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
import SignUpFormular from '../containers/SignUpFormular'

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

    <SideBarButton onClick={action('clicked')} style={{ backgroundColor: '#731717' }} >
      English
    </SideBarButton>)

storiesOf('SignUpFormular', module)
  .add('Complete formular', () => <SignUpFormular />)
