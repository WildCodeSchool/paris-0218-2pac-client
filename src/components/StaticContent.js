import React from 'react'
import ScrollUp from '../containers/utils/ScrollUp'
import './StaticContent.css'

const StaticContent = ({ content }) =>
  <ScrollUp>
    <div className="static-content container" dangerouslySetInnerHTML={{ __html: content }}></div>
  </ScrollUp>

export default StaticContent
