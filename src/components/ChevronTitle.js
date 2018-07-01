import React from 'react'
import FaChevronRight from 'react-icons/lib/fa/chevron-right'
import './ChevronTitle.css'

const Title = (props) => {
  return (

    <div className="title"> <FaChevronRight className='icon' style={{color: `${props.ChevronColor}` }}/> {props.title} </div>
  )
}

export default Title
