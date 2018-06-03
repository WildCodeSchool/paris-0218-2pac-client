import React from 'react'

import { storiesOf } from '@storybook/react'
/*
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
*/
import Footer from '../components/Footer'
import FooterMembersLogos from '../components/FooterMembersLogos'

storiesOf('Footer', module)
  .add('Complete footer', () => <Footer />)

storiesOf('FooterMembersLogos', module)
  .add('Footer members logo section', () => <FooterMembersLogos />)
