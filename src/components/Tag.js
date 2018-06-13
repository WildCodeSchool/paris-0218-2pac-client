import React from 'react'
import './Tag.css'

const Tag = ({ tag }) => {
  return (
    <span className="tag">{tag.name}</span>
  )
}

export default Tag
