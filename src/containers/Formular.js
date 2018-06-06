import React, { Component } from 'react'
import './Formular.css'
import FaChevronRight from 'react-icons/lib/fa/chevron-right'
import Submit from '../components/Submit'

class Formular extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lastName: '',
      firstName: '',
      mail: '',
      number: ''
    }
  }

updateEmailField = (event) => {
  this.setState({email: event.target.value})
};

handleSubmit (event) {
  alert('votre formulaire a été envoyé: ' + this.state.value)
  event.preventDefault()
};

render () {
  return (
    <div id='formular_container'>
      <p><FaChevronRight className='icon' />RECEVOIR DES NOUVELLES DE <span>POUR UNE AUTRE PAC</span></p><br />
      <p>En remplissant ce formulaire, la plateforme <span>Pour une autre PAC </span>
        pourra utiliser ces données pour vous informer des ses prochaines actions.</p>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type='checkbox' name='checkbox'/>
          <p>J'accepte que ces données soient utilisées par <span>Pour une autre PAC.</span></p>
          <input type='text' name='lastName' placeholder='Nom' onChange={this.updateField(this)}/>
          <input type='text' name='firstName' placeholder='Prénom' onChange={this.updateField(this)}/>
          <input type='mail' name='mail' placeholder='Adresse mail' onChange={this.updateField(this)}/>
          <input type='number' name='number' placeholder='Numéro de téléphone' onChange={this.updateField(this)}/>
        </label>
        <Submit />
      </form>
    </div>
  )
}
}

export default Formular
