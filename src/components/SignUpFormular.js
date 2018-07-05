import React from 'react'
import './SignUpFormular.css'
import ChevronTitle from './ChevronTitle'

const initialInputValues = {
  reuseableInfo: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: ''
}

class SignUpFormular extends React.Component {
  state = {
    inputs: initialInputValues
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert('votre formulaire a été envoyé')
  }

  render () {
    return (
      <div id='formular_container'>
        <p><ChevronTitle ChevronColor="white" TextColor="white" title="Recevoir des nouvelles de pour une autre Pac" /> </p>
        <p>En remplissant ce formulaire, la plateforme <i>Pour une autre PAC </i>
            pourra utiliser ces données pour vous informer des ses prochaines actions.</p>
        <form onSubmit={this.handleSubmit}>

          <div>
            <input type='checkbox' name='checkbox'/>
            <span>J'accepte que ces données soient utilisées par Pour une autre PAC.</span>
          </div>

          <div>
            <input type='text' name='lastName' placeholder='Nom' />
            <input type='text' name='firstName' placeholder='Prénom' />
          </div>

          <div>
            <input type='tel' name='number' placeholder='Numéro de téléphone' />
            <input type='mail' name='mail' placeholder='Adresse e-mail' />
          </div>

          <input type='submit' value="➔ S'inscrire" />
        </form>
      </div>
    )
  }
}

export default SignUpFormular
