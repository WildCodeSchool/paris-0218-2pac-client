import React from 'react'
import FaChevronRight from 'react-icons/lib/fa/chevron-right'
import './ChevronTitle.css'

const Title = (props) => {
  return (

    <div className="title"> <FaChevronRight className='icon' /> {props.title} </div>
  )
}

export default Title
