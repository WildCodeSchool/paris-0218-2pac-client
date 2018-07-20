import React from 'react'
import FaChevronRight from 'react-icons/lib/fa/chevron-right'
import './ChevronTitle.css'

const ChevronTitle = ({ title, TextColor, ChevronColor }) =>
  <div className="chevron-title" style={{ color: `${TextColor}` }}>
    <FaChevronRight className='chevron-title-icon' style={{ color: `${ChevronColor}` }} />
    {title}
  </div>

export default ChevronTitle
