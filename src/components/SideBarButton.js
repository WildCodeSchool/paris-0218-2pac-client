import React from 'react'
import './SideBarButton.css'

const SideBarButton = ({ children, ...rest }) => {
  return (
    <button className="SideBarButton" {...rest}>
      {children}
    </button>
  )
}

export default SideBarButton
