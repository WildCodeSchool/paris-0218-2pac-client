import React from 'react'
import './Button.css'

const Button = ({ children, ...rest }) => {
  return (
    <button className="Button" {...rest}>
      {children}
    </button>
  )
}

export default Button
