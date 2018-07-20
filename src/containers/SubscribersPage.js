import React from 'react'
import ChevronTitle from '../components/ChevronTitle'
import './SubscribersPage.css'
import api from '../api.js'

const freshSubscriber = {
  reuseableInfo: false,
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: ''
}

class SubscribersPage extends React.Component {
  state = {
    subscriber: freshSubscriber
  }

  handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    return this.setState({ subscriber: { ...this.state.subscriber, [e.target.name]: value } })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const subscriber = this.state.subscriber

    api.newSubscriber(subscriber)
    // .then(res => this.reset())
  }

  render () {
    const subscriber = this.state.subscriber

    return (
      <div id='subscribers-page' className="container">
        <h3><ChevronTitle ChevronColor="white" TextColor="white" title="Recevoir des nouvelles de pour une autre Pac" /></h3>
        <p>En remplissant ce formulaire, la plateforme <i>Pour une autre PAC</i> pourra utiliser ces données pour vous informer des ses prochaines actions.</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type='checkbox' name='reuseableInfo' checked={subscriber.reuseableInfo} onChange={this.handleChange}/>
            <span>J'accepte que ces données soient utilisées par <i>Pour une autre PAC</i>.</span>
          </div>
          <div>
            <input type='text' name='lastName' placeholder='Nom*' required value={subscriber.lastName} onChange={this.handleChange}/>
            <input type='text' name='firstName' placeholder='Prénom*' required value={subscriber.firstName} onChange={this.handleChange} />
          </div>
          <div>
            <input type='text' name='phoneNumber' placeholder='Numéro de téléphone' value={subscriber.phoneNumber} onChange={this.handleChange}/>
            <input type='text' name='email' placeholder='Adresse Mail*' required value={subscriber.email} onChange={this.handleChange}/>
          </div>
          <input type='submit' value="➔ S'inscrire" />
        </form>
      </div>
    )
  }
}

export default SubscribersPage
