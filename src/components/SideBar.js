import React from 'react'
import './SideBar.css'
import SideBarButton from './SideBarButton'

const SideBar = () => {
  return (
    <div className="SideBar">
      <SideBarButton onClick={() => console.log('Qui sommes nous?')} style={{ color: 'black' }}>
        Qui sommes nous?
      </SideBarButton>
      <SideBarButton onClick={() => console.log('Ressources')} style={{ backgroundColor: '#F4971A' }}>
        Ressources
      </SideBarButton>
      <SideBarButton onClick={() => console.log('Actualités')} style={{ backgroundColor: '#A99C2F' }}>
        Actualités
      </SideBarButton>
      <SideBarButton onClick={() => console.log('English')} style={{ backgroundColor: '#731717' }}>
        English
      </SideBarButton>
    </div>
  )
}

export default SideBar
