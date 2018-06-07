import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
/*
import { linkTo } from '@storybook/addon-links'
*/

import Login from '../components/Login'
import SideBar from '../components/SideBar'
import SideBarButton from '../components/SideBarButton'
import Footer from '../components/Footer'
import FooterMembersLogos from '../components/FooterMembersLogos'

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
storiesOf('SideBar', module)
  .add('Classic', () => <SideBar />)

storiesOf('SideBarButton', module)
  .add('Dark green', () =>
    <SideBarButton onClick={action('clicked')}  style={{ color: 'black' }}>
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
