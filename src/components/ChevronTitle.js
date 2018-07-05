import React from 'react'
import FaChevronRight from 'react-icons/lib/fa/chevron-right'
import './ChevronTitle.css'

const Title = (props) => {
  return (
    <div className="title" style={{ color: `${props.TextColor}` }} > <FaChevronRight className='icon' style={{ color: `${props.ChevronColor}` }} /> {props.title} </div>
  )
}

export default Title
