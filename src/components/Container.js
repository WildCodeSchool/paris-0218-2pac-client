import React, { Component } from 'react'
import './Container.css'

const Container = ({children}) => {

    return (
      <div className="container-content">
        {children}
      </div>
    )

}

export default Container
