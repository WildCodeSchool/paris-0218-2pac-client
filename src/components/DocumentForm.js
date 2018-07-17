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
          <div className="test">
            <label>Titre :
              <input className="document-form-input" type='text' name='title' placeholder="Saisir un titre" value={doc.title} onChange={this.handleChange} />
            </label>
            <label>Url :
              <input className="document-form-input" type='text' name='url' value={doc.url} onChange={this.handleChange} />
            </label>
          </div>

          <div className="cat">
            <label>Catégorie :
              <select className="document-form-select" name='typeId' value={doc.typeId} onChange={this.handleChange}>
                <option value={1}>Textes politiques</option>
                <option value={2}>Documents de position des organisations membres</option>
                <option value={3}>Documents réservés aux membres</option>
                <option value={4}>Travaux de recherche</option>
                <option value={5}>Autres documents de position</option>
              </select>
            </label>

            <div className="document-form-checkboxes">
              <span className="align">Contenu membre :
                <input type='checkbox' name='isMemberOnly' checked={doc.isMemberOnly} onChange={this.handleChange} />
              </span>
              <span className="align">Ressource :
                <input type='checkbox' name='isResource' checked={doc.isResource} onChange={this.handleChange} />
              </span>
              <span className="align">Archivé :
                <input type='checkbox' name='isArchived' checked={doc.isArchived} onChange={this.handleChange} />
              </span>
            </div>
          </div>

          <div className="document-form-shortDescription">Résumé :
            <textarea className="shortDescription-document" type='text' name='shortDescription' value={doc.shortDescription} onChange={this.handleChange} />
          </div>

          <button className="document-form-button" type='submit' value='submit'>Valider</button>

        </form>
      </div>
    )
  }
}

export default DocumentForm
