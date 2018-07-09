import React from 'react'
import './SignUpFormular.css'
import ChevronTitle from './ChevronTitle'

const initialInputValues = {
  reuseableInfo: false,
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: ''
}

class SignUpFormular extends React.Component {
  state = {
    inputs: initialInputValues
  }

handleChange = (e) => {
  const inputs = {
    ...this.state.inputs,
    [e.target.name]: e.target.value

  }

  const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
  return this.setState({ inputs: { ...this.state.inputs, [e.target.name]: value } })

  this.setState({ inputs: inputs })
}

  handleSubmit = (e) => {
    e.preventDefault()
    // alert('votre formulaire a été envoyé')

    const data = this.state.inputs
    console.log(data)

    fetch('/subscribers', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    })
    // .then(res => res.json())
    // .then(res => this.reset())
  }

  render () {
    const inputs = this.state.inputs

    return (
      <div id='formular_container'>
        <p><ChevronTitle ChevronColor="white" TextColor="white" title="Recevoir des nouvelles de pour une autre Pac" /> </p>
        <p>En remplissant ce formulaire, la plateforme <i>Pour une autre PAC </i>
            pourra utiliser ces données pour vous informer des ses prochaines actions.</p>
        <form onSubmit={this.handleSubmit}>

          <div>
            <input type='checkbox' name='reuseableInfo' checked={inputs.reuseableInfo} onChange={this.handleChange}/>
            <span>J'accepte que ces données soient utilisées par Pour une autre PAC.</span>
          </div>

          <div>
            <input type='text' name='lastName' placeholder='Nom' value={inputs.lastName} onChange={this.handleChange}/>
            <input type='text' name='firstName' placeholder='Prénom' value={inputs.firstName} onChange={this.handleChange} />
          </div>

          <div>
            <input type='text' name='phoneNumber' placeholder='Numéro de téléphone' value={inputs.phoneNumber} onChange={this.handleChange}/>
            <input type='text' name='email' placeholder='Adresse e-mail' value={inputs.email} onChange={this.handleChange}/>
          </div>

          <input type='submit' value="➔ S'inscrire" />
        </form>
      </div>
    )
  }
}

export default SignUpFormular
