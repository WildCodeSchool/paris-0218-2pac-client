import React, {Component} from 'react'
import FaChevronRight from 'react-icons/lib/fa/chevron-right'
import Container from './Container.js'
import './FrontNews.css'

class FrontNews extends Component {
  render () {
    return (
      <div>
        <h1 className="title"> <FaChevronRight className='icon' /> A LA UNE </h1>
        <Container />
      </div>
    )
  }
}

export default FrontNews
