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
import SignUpFormular from '../components/SignUpFormular'
import ArticlePreview from '../components/ArticlePreview'
import LongArticle from '../components/LongArticle'
import SmallArticle from '../components/SmallArticle'
import Une from '../components/Une'
import Actuality from '../components/Actuality'
import Page404 from '../components/Page404'
import { NewDocumentForm } from '../components/DocumentForms'
import ArticleForm from '../components/ArticleForm'
import AdminDocuments from '../components/AdminDocuments'
import AdminArticles from '../components/AdminArticles'

import Resources from '../components/Resources'

import AdminContainer from '../containers/AdminContainer'

/* MOCKS IMPORT */
import infoContact from '../mocks/infoContact.json'
import mockedArticle from '../mocks/article.json'
import mockedArticles from '../mocks/articles.json'
import mockedDocuments from '../mocks/documents.json'
import noImgArticle from '../mocks/noImgArticle.json'

storiesOf('App', module)
  .add('Whole App', () => <App />)

storiesOf('*Footer', module)
  .add('Complete footer', () => <Footer />)

storiesOf('FooterMembersLogos', module)
  .add('Footer members logo section', () => <FooterMembersLogos />)

storiesOf('Login', module)
  .add('login text', () =>
    <div style={{background: 'black'}}>
      <Login />
    </div>)

storiesOf('Button', module)

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

storiesOf('*Article', module)
  .add('basic article', () => <Article article={mockedArticle} />)
  .add('Article without img', () => <Article article={noImgArticle} />)

storiesOf('*Contact', module)
  .add('Contact template', () => <Contact contactData={infoContact} />)

storiesOf('LongArticle', module)
  .add('Long article component', () => <LongArticle />)

storiesOf('SmallArticle', module)
  .add('Small article component', () => <SmallArticle />)

storiesOf('ArticlePreview', module)
  .add('Preview des articles à la unes', () => <ArticlePreview />)

storiesOf('*Une', module)
  .add('Articles à la une complet', () => <Une articles={mockedArticles} />)

storiesOf('Actualités', module)
  .add('bloc d\'actu pour la page "actualité" ', () => <Actuality articles={mockedArticles} />)

storiesOf('Page404', module)
  .add('à ton avis', () => <Page404 />)

storiesOf('DocumentForms', module)
  .add('NewDocumentForm', () => <NewDocumentForm />)

storiesOf('formulaire de création', module)
  .add("création d'articles et d'évènements", () => <ArticleForm />)

storiesOf('Resources Page', module)
  .add('Cards list with filters', () => <Resources documents={mockedDocuments} />)

// Admin area

storiesOf('Documents admin', module)
  .add('AdminDocuments', () => <AdminDocuments documents={mockedDocuments} />)

storiesOf('Articles admin', module)
  .add('AdminArticles', () => <AdminArticles articles={mockedArticles} />)

storiesOf('AdminContainer', module)
  .add('AdminContainer', () => <AdminContainer />)
