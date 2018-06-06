import React, { Component } from 'react'
import './Submit.css'

class Submit extends Component {
  render () {
    return (
      <label>
        <input onClick={this.handleSubmit} type='submit' value="➔ S'inscrire" />
      </label>
    )
  }
}

export default Submit
