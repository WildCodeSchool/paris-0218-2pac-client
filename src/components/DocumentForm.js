import React from 'react'
import './DocumentForm.css'

const freshDocument = {
  title: '',
  shortDescription: '',
  typeId: 1,
  isMemberOnly: false,
  isResource: false,
  isArchived: false,
  url: ''
}

class DocumentForm extends React.Component {
  state = {
    doc: this.props.doc || freshDocument
  }

  handleChange = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    return this.setState({ doc: { ...this.state.doc, [e.target.name]: value } })
  }

  reset = () => {
    this.setState({ doc: freshDocument })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const doc = this.state.doc

    this.props.submitDocument(doc)
    // .then(res => this.reset())
  }

  render () {
    const doc = this.state.doc

    return (
      <div id='document-form'>
        <form onSubmit={this.handleSubmit}>
          <label>Titre :
            <input type='text' name='title' value={doc.title} onChange={this.handleChange} />
          </label>
          <label>url
            <input type='text' name='url' value={doc.url} onChange={this.handleChange} />
          </label>
          <label>Catégorie :
            <select name='typeId' value={doc.typeId} onChange={this.handleChange}>
              <option value={1}>Textes politiques</option>
              <option value={2}>Documents de position des organisations membres</option>
              <option value={3}>Documents réservés aux membres</option>
              <option value={4}>Travaux de recherche</option>
              <option value={5}>Autres documents de position</option>
            </select>
          </label>
          <label>Résumé :
            <textarea type='text' name='shortDescription' value={doc.shortDescription} onChange={this.handleChange} />
          </label>
          <label>Contenu membre :
            <input type='checkbox' name='isMemberOnly' checked={doc.isMemberOnly} onChange={this.handleChange} />
          </label>
          <label>Ressource :
            <input type='checkbox' name='isResource' checked={doc.isResource} onChange={this.handleChange} />
          </label>
          <label>Archivé
            <input type='checkbox' name='isArchived' checked={doc.isArchived} onChange={this.handleChange} />
          </label>
          <label>
            <button type='submit' value='submit'>Valider</button>
          </label>
        </form>
      </div>
    )
  }
}

export default DocumentForm
