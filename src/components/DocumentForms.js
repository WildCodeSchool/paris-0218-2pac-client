import React from 'react'
import Container from './Container'
import './DocumentForms.css'

const initialInputValues = {
  title: '',
  shortDescription: '',
  typeId: 1,
  isMemberOnly: false,
  isResource: false
}

export class NewDocumentForm extends React.Component {
  state = {
    inputs: initialInputValues
  }

  handleChange = e => {
    switch (e.target.name) {
      case 'document':
        return this.setState({ inputs: { ...this.state.inputs, document: e.target.files[0] } })
      default:
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        return this.setState({ inputs: { ...this.state.inputs, [e.target.name]: value } })
    }
  }

  reset = () => {
    this.setState({ inputs: initialInputValues })

    // only way to reset the value of the input type file
    document.getElementById('document_file').value = ''
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const inputs = this.state.inputs

    const formData = new FormData()

    for (const [key, value] of Object.entries(inputs)) {
      formData.set(key, value)
    }

    fetch('http://localhost:5000/documents', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(res => this.reset())
  }

  render () {
    const inputs = this.state.inputs

    return (
      <div>
        <Container>
          <form id='documents_form' onSubmit={this.handleSubmit}>
            <label>Titre
              <input type="text_title" name='title' value={inputs.title} onChange={this.handleChange} />
            </label>
            <label>Document
              <input id="document_file" type="file" name="document" onChange={this.handleChange} accept="image/png, image/jpeg, application/pdf, .word, .ppt, .pdf, .docx" />
            </label>
            <label>Catégorie
              <select name='typeId' value={inputs.typeId} onChange={this.handleChange}>
                <option value={1}>Textes politiques</option>
                <option value={2}>Documents de position des organisations membres</option>
                <option value={3}>Documents réservés aux membres</option>
                <option value={4}>Travaux de recherche</option>
                <option value={5}>Autres documents de position</option>
              </select>
            </label>
            <label>Description
              <textarea type="text_resume" name='shortDescription' value={inputs.shortDescription} onChange={this.handleChange} />
            </label>
            <label>Accessible uniquement aux membres
              <input type='checkbox' name='isMemberOnly' checked={inputs.isMemberOnly} onChange={this.handleChange} />
            </label>
            <label>Ressource
              <input type='checkbox' name='isResource' checked={inputs.isResource} onChange={this.handleChange} />
            </label>
            <label>
              <button type="submit" value="submit">Ajouter</button>
            </label>
          </form>
        </Container>
      </div>
    )
  }
}
