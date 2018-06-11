import React from 'react'
import './Search.css'

class Search extends React.Component {
  render () {
    return (
      <div className="searchBar">
        <input className="search" type="text" placeholder="Search" />
      </div>
    )
  }
}

export default Search
