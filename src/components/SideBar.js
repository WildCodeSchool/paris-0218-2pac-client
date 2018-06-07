import React from 'react'
import './SideBar.css'
import SideBarButton from './SideBarButton'

const SideBar = () => {
  return (
    <div className="SideBar icon-button-globe">
      <SideBarButton onClick={() => console.log('Actualités')}  style={{ backgroundColor: '#226462' }}>
        <span><i className="fas fa-globe"></i></span>Actualités
      </SideBarButton>
      <SideBarButton onClick={() => console.log('Ressources')} style={{ backgroundColor: '#F4971A' }}>
        <span><i className="fas fa-book-open"></i></span>Ressources
      </SideBarButton>
      <SideBarButton onClick={() => console.log('Contacts')} style={{ backgroundColor: '#A99C2F' }}>
        <span><i className="fas fa-user-alt"></i></span>Contacts
      </SideBarButton>
      <SideBarButton onClick={() => console.log('Newsletter')} style={{ backgroundColor: '#731717' }}>
        <span><i className="fas fa-rss"></i></span>Newsletter
      </SideBarButton>
      <SideBarButton onClick={() => console.log('Twitter')} style={{ backgroundColor: 'grey', width: '2em', height: '2em', position: 'relative'  }}>
        <span><i className="twitter" className="fab fa-twitter"></i></span>
      </SideBarButton>
    </div>
  )
}

export default SideBar
