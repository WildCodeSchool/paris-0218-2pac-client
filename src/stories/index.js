import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Login from '../components/Login'
import Button from '../components/Button'
import Nav from '../components/Nav'
import Header from '../components/Header'
import HeaderWrapper from '../components/HeaderWrapper'

storiesOf('Login', module)
  .add('login text', () =>
    <div style={{background: 'black'}}>
      <Login />
    </div>)

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

storiesOf('Nav', module)
  .add('Navbar only', () => <Nav />)

storiesOf('Header', module)
  .add('Header classic with nav', () => <Header />)

storiesOf('HeaderWrapper', module)
  .add('Entire header wrapped and functionnal', () => <HeaderWrapper />)
