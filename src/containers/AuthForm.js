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
          ? <div className='flex-row'>
            <span className='mr-1'>Connecté, <strong>{loggedAs.username}</strong></span>
            <input type='button' value='Se déconnecter' onClick={this.signout}/>
            {loggedAs.isAdmin ? <Link to='/admin'><input type='button' value="Zone admin" /></Link> : ''}
          </div>
          : <form className='flex row' onSubmit={this.signin}>
            <span className="auth-error-message">{this.state.message}</span>
            <input type='text' placeholder='identifiant' required name='username' value={this.state.username} onChange={this.handleChange} />
            <input type='password' placeholder='mot de passe' required name='password' value={this.state.password} onChange={this.handleChange} />
            <input type='submit' value='Se connecter' />
          </form>
        }
      </div>
    )
  }
}

export default AuthForm
