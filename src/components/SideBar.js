import React from 'react'
import './SideBar.css'
import SideBarButton from './SideBarButton'
import { Router, Link } from "@reach/router";

const SideBar = () => {
  return (
    <div className="SideBar icon-button-globe">

      <SideBarButton style={{ backgroundColor: '#226462' }}>
        <span><i className="fas fa-globe"></i></span>Actualités
      </SideBarButton>

      <SideBarButton style={{ backgroundColor: '#F4971A' }}>
        <span><i className="fas fa-book-open"></i></span>Ressources
      </SideBarButton>

      <Link to="contact">
      <SideBarButton style={{ backgroundColor: '#A99C2F' }}>
        <span><i className="fas fa-user-alt"></i></span> Contacts
      </SideBarButton>
      </Link>

      <Link to="newsletter">
      <SideBarButton style={{ backgroundColor: '#731717' }}>
        <span><i className="fas fa-rss"></i></span>Newsletter
      </SideBarButton>
      </Link>

      <SideBarButton style={{ backgroundColor: '#00aced' }}>
        <span><i className="fab fa-twitter"></i></span>
      </SideBarButton>

    </div>
  )
}

export default SideBar
