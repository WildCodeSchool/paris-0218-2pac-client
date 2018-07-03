import React from 'react'
import './UploadForm.css'
import Container from './Container'
const initialInputValues = {
  typeId: '',
  title: '',
  shortDescription: '',
  url: '',
  isMemberOnly: '',
  isResource: '',
  isArchived: ''
}

class UploadForm extends React.Component {
state = {
  inputs: initialInputValues
}

handleChange = (e) => {
  const inputs = {
    ...this.state.inputs,
    [e.target.name]: e.target.value
  }

  this.setState({ inputs: inputs })
}

reset = () => {
  this.setState({ inputs: initialInputValues })
}

handleSubmit = (e) => {
  e.preventDefault()

  const data = this.state.inputs

  fetch('/documents', {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => {
      this.reset()
    })
}

render () {
  const inputs = this.state.inputs

  return (
    <div>
      <Container>
    <form id='formular_documents' onSubmit={this.handleSubmit}>
      <label>
        <p>Titre :</p>
        <input type="text_title" name='title' value={inputs.title} onChange={this.handleChange} />
        <div>
        <label for="avatar">Sélectionner un fichier :</label>
        <input type="file"
               id="avatar" name="avatar"
               accept="image/png, image/jpeg, application/pdf, .word, .ppt, .pdf, .docx" />
    </div>


        <p>Choix de la catégorie :</p>
        <select id="categoryId" name='categoryId' value={inputs.typeId} onChange={this.handleChange}>
          <option value="1">Textes politiques</option>
          <option value="2">Documents de position des organisations membres</option>
          <option value="3">Documents réservés aux membres</option>
          <option value="4">Travaux de recherche</option>
          <option value="5">Autres documents de position</option>
        </select>
        <p>Résumé :</p>
        <textarea type="text_resume" name='shortDescription' value={inputs.shortDescription} onChange={this.handleChange} />
        <p>Lien du document :</p>
        <input type="text_URL" name='documentURL' value={inputs.url} onChange={this.handleChange} />
        <p>Accessible uniquement aux membres :</p>
        <input type='checkbox' name='checkbox' value={inputs.isMemberOnly} onChange={this.handleChange} />
        <p>Ressource :</p>
        <input type='checkbox' name='checkbox' value={inputs.isResource} onChange={this.handleChange} />
        <p>Archive :</p>
        <input type='checkbox' name='checkbox' value={inputs.isArchived} onChange={this.handleChange} />
        <div>
        <button type="submit" value="submit">Ajouter</button>
        </div>
    </label>
    </form>
      </Container>
        </div>
  )
}
}

export default UploadForm
