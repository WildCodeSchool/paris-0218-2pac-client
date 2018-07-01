import React, { Component } from 'react'
import './SignUpFormular.css'
import FaChevronRight from 'react-icons/lib/fa/chevron-right'
class SignUpFormular extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    alert('votre formulaire a été envoyé')
  }

  render () {
    return (
      <div id='formular_container'>
        <p id='SignUpText'><FaChevronRight className='icon' />RECEVOIR DES NOUVELLES DE <i>POUR UNE AUTRE PAC </i><br /></p>
        <p id='SignUpText'>En remplissant ce formulaire, la plateforme <i>Pour une autre PAC </i> &nbsp;
           pourra utiliser ces données pour vous informer de ses prochaines actions.</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type='checkbox' name='checkbox'/>
            <span id='SignUpText'>J'accepte que ces données soient utilisées par <i>Pour une autre PAC.</i></span>
            <input type='text' name='lastName' placeholder='Nom' />
            <input type='text' name='firstName' placeholder='Prénom' />
            <input type='mail' name='mail' placeholder='Adresse mail' />
            <input type='tel' name='phone' placeholder='Numéro de téléphone' />
          </label>
          <input type='submit' value="➔ S'inscrire" />
        </form>
      </div>
    )
  }
}
export default SignUpFormular
