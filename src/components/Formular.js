import React, { Component } from 'react'
import './Formular.css'
import FaChevronRight from 'react-icons/lib/fa/chevron-right'
import Submit from './Submit'

class Formular extends Component {
  render () {
    return (
      <div id='formular_container'>
        <p><FaChevronRight className='icon' />RECEVOIR DES NOUVELLES DE <span>POUR UNE AUTRE PAC</span></p><br />
        <p>En remplissant ce formulaire, la plateforme <span>Pour une autre PAC </span>
        pourra utiliser ces données pour vous informer des ses prochaines actions.</p>
        <form>
          <label>
            <input type='checkbox' name='checkbox'/>
            <p>J'accepte que ces données soient utilisées par <span>Pour une autre PAC.</span></p>
            <input placeholder='Nom' />
            <input placeholder='Prénom' />
            <input placeholder='Adresse mail' />
            <input placeholder='Numéro de téléphone' />
          </label>
          <Submit />
        </form>
      </div>
    )
  }
}

export default Formular
