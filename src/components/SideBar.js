import React from 'react'
import SideBarButton from './SideBarButton'
import EventsCalendar from '../containers/EventsCalendar'
import { Link } from '@reach/router'
import './SideBar.css'

const SideBar = ({ articles }) => {
  const events = articles.filter(article => article.categoryId === 4)

  return (
    <div className="SideBar icon-button-globe">

      <Link to="/actuality">
        <SideBarButton style={{ backgroundColor: '#226462' }}>
          <span><i className="fas fa-globe"></i></span>Actualités
        </SideBarButton>
      </Link>

      <Link to="/resources">
        <SideBarButton style={{ backgroundColor: '#F4971A' }}>
          <span><i className="fas fa-book-open"></i></span>Ressources
        </SideBarButton>
      </Link>

      <Link to="/contact">
        <SideBarButton style={{ backgroundColor: '#A99C2F' }}>
          <span><i className="fas fa-user-alt"></i></span>Contacts
        </SideBarButton>
      </Link>

      <Link to="/newsletter">
        <SideBarButton style={{ backgroundColor: '#731717' }}>
          <span><i className="fas fa-rss"></i></span>Rester connecté
        </SideBarButton>
      </Link>

      <a href="https://twitter.com/pouruneautrepac" target="_blank" rel="noopener noreferrer">
        <SideBarButton style={{ backgroundColor: '#707070' }}>
          <span><i className="fab fa-twitter"></i></span>
        </SideBarButton>
      </a>

      <EventsCalendar events={events} />
    </div>
  )
}

export default SideBar
