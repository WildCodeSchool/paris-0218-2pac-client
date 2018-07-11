import React, { Component } from 'react'
import { Link } from '@reach/router'
import api from '../api.js'
import './AuthForm.css'

class AuthForm extends Component {
  state = {
    username: '',
    password: '',
    message: ''
  }

  handleChange = e => {
    const { name: key, value } = e.target

    this.setState({ [key]: value })
  }

  signin = e => {
    e.preventDefault()

    this.setState({ message: '' })

    const credentials = {
      username: this.state.username,
      password: this.state.password
    }

    api.signIn(credentials)
      .then(response => {
        if (response.error) {
          this.setState({ message: response.error })
          return
        }

        this.setState({ username: '', password: '' })

        this.props.onLoggedIn(response.user) // todo: put in setState cb ?
      })
  }

  signout = e => {
    e.preventDefault()

    api.signOut().then(() => this.props.onLoggedOut())
  }

  render () {
    const { loggedAs } = this.props

    return (
      <div id='auth-form'>
        { loggedAs
          ? <div>
            <span>Logged as <strong>{loggedAs.username}</strong></span>
            <input type='button' value='Sign Out' onClick={this.signout}/>
            {loggedAs.isAdmin ? <Link to='/admin'><button>admin</button></Link> : ''}
          </div>
          : <div>
            <form onSubmit={this.signin}>
              <input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.handleChange} />
              <input type='password' placeholder='password' name='password' value={this.state.password} onChange={this.handleChange} />
              <input type='submit' value='Sign in' />
              <span>{this.state.message}</span>
            </form>
          </div>
        }
      </div>
    )
  }
}

export default AuthForm
