import React from 'react'
import { Link } from '@reach/router'
import SearchBar from './SearchBar'
import './SideBar.css'

const SideBarButton = ({ backgroundColor, icon, children }) =>
  <div className="sidebar-button" style={{ backgroundColor }}>
    <i className={`flex-1 sidebar-button-icon ${icon}`} />
    { children ? <div className="flex-5">{children}</div> : '' }
  </div>

const SideBar = ({ articles, onSearchSubmit }) =>
  <div id="sidebar">
    <SearchBar onSubmit={onSearchSubmit} />
    <Link to="/news"><SideBarButton backgroundColor="#226462" icon="fas fa-globe">Actualités</SideBarButton></Link>
    <Link to="/resources"><SideBarButton backgroundColor="#F4971A" icon="fas fa-book-open">Ressources</SideBarButton></Link>
    <Link to="/contact"><SideBarButton backgroundColor="#A99C2F" icon="fas fa-user-alt">Contacts</SideBarButton></Link>
    <Link to="/subscribe"><SideBarButton backgroundColor="#731717" icon="fas fa-rss">Rester connecté</SideBarButton></Link>
    <a href="https://twitter.com/pouruneautrepac" target="_blank" rel="noopener noreferrer">
      <SideBarButton backgroundColor="#707070" icon="fab fa-twitter"></SideBarButton>
    </a>
  </div>

export default SideBar
