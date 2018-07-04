import React from 'react'
import './ArticleForm.css'

const initialInputValues = {
  title: '',
  shortDescription: '',
  description: '',
  eventDate: '',
  categoryId: '',
  imageURL: '',
  imageDescription: ''
}

class ArticleForm extends React.Component {
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

    fetch('/articles', {
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
      <form id='formular_articles' onSubmit={this.handleSubmit}>
        <label>Titre :
          <input type="text_title" name='title' value={inputs.title} onChange={this.handleChange} />
        </label>
        <label>Choix de la catégorie :
          <select id="categoryId" name='categoryId' value={inputs.categoryId} onChange={this.handleChange}>
            <option value="1">article</option>
            <option value="2">presse</option>
            <option value="3">actualité</option>
            <option value="4">évènement</option>
          </select>
        </label>

        <label>Résumé :
          <textarea type="text_resume" name='shortDescription' value={inputs.shortDescription} onChange={this.handleChange} />
        </label>
        <label>Description :
          <textarea type="text_description" name='description' value={inputs.description} onChange={this.handleChange} />
        </label>
        <label>Date :
          <input type="eventDate" name='eventDate' value={inputs.eventDate} onChange={this.handleChange} />
        </label>
        <label>Lien de l'image :
          <input type="text_URL" name='imageURL' value={inputs.imageURL} onChange={this.handleChange} />
        </label>
        <label>Description de l'image :
          <input type="text_description_image" name='imageDescription' value={inputs.imageDescription} onChange={this.handleChange} />
        </label>
        <button type="submit" value="submit">Ajouter</button>
      </form>
    )
  }
}

export default ArticleForm
