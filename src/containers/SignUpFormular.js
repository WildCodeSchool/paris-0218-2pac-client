import React, { Component } from 'react'
import './SignUpFormular.css'
import FaChevronRight from 'react-icons/lib/fa/chevron-right'

class SignUpFormular extends Component {
  constructor (props) {
    super(props)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('votre formulaire a été envoyé')
  }

  render () {
    return (
      <div id='formular_container'>
        <p><FaChevronRight className='icon' />RECEVOIR DES NOUVELLES DE <span>POUR UNE AUTRE PAC</span></p><br />
        <p>En remplissant ce formulaire, la plateforme <i>Pour une autre PAC </i>
          pourra utiliser ces données pour vous informer des ses prochaines actions.</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type='checkbox' name='checkbox'/>
            <p>J'accepte que ces données soient utilisées par <span>Pour une autre PAC.</span></p>
            <input type='text' name='lastName' placeholder='Nom' />
            <input type='text' name='firstName' placeholder='Prénom' />
            <input type='mail' name='mail' placeholder='Adresse mail' />
            <input type='number' name='number' placeholder='Numéro de téléphone' />
          </label>
          <input type='submit' value="➔ S'inscrire" />
        </form>
      </div>
    )
  }
}

export default SignUpFormular
