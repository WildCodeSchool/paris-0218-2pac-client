import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
  state = {
    searchValue: ''
  }

  reset = () => {
    this.setState({ searchValue: '' })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.onSubmit(this.state.searchValue)

    this.reset()
  }

  handleChange = value => {
    this.setState({ searchValue: value })
  }

  render () {
    return (
      <div id="search-bar">
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.searchValue} placeholder='rechercher...' onChange={e => this.handleChange(e.target.value)} />
        </form>
      </div>
    )
  }
}

export default SearchBar
