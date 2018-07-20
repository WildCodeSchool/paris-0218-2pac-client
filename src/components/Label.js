import React from 'react'
import './Label.css'

const Label = ({ children, ...rest }) => <span className="label" { ...rest }>{children}</span>

export default Label
