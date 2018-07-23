import React from 'react'
import Alert from 'react-s-alert'
import './DocumentForm.css'

const freshDocument = {
  title: '',
  shortDescription: '',
  typeId: 1,
  isMemberOnly: false,
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
      .then(res => {
        Alert.success(`Succès`)
        this.reset()
        setTimeout(() => { window.location = window.location }, 500)
      })
  }

  render () {
    const doc = this.state.doc

    return (
      <div id='document-form' className="admin-form container">
        <form onSubmit={this.handleSubmit}>
          <div className="flex row">
            <label>Titre
              <input type='text' name='title' required value={doc.title} onChange={this.handleChange} />
            </label>
            <label>Catégorie
              <select name='typeId' required value={doc.typeId} onChange={this.handleChange}>
                <option value={1}>Textes politiques</option>
                <option value={2}>Documents de position des organisations membres</option>
                <option value={3}>Documents réservés aux membres</option>
                <option value={4}>Travaux de recherche</option>
                <option value={5}>Autres documents de position</option>
              </select>
            </label>
          </div>
          <label>Url
            <input type='text' name='url' required value={doc.url} onChange={this.handleChange} />
          </label>
          <label>Résumé
            <textarea type='text' name='shortDescription' value={doc.shortDescription} onChange={this.handleChange} />
          </label>
          <label>Contenu membre
            <input type='checkbox' name='isMemberOnly' checked={doc.isMemberOnly} onChange={this.handleChange} />
          </label>
          <input type='submit' value='Valider' />
        </form>
      </div>
    )
  }
}

export default DocumentForm
