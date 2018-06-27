import React from 'react'
import './form.css'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      shortDescription: '',
      description: '',
      eventDate: '',
      categoryId: '',
      imageURL: '',
      imageDescription: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({value: e.target.value})
  }

  handleSubmit (e) {
    console.log(this.state)
    this.setState({
      title: '',
      shortDescription: '',
      description: '',
      eventDate: '',
      categoryId: '',
      imageURL: '',
      imageDescription: ''
    })
    e.preventDefault()
    fetch("/articles",

      {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state),
      })
      .then(res => res.json())
      .then(
      res => this.setState({"flash": res.flash}),
      err => this.setState({"flash": err.flash})
)
}

  render () {
    return (
      <div id='formular_articles'>
        <form onSubmit={this.handleSubmit}>
        <label>
          <h1 id='event_title'>Formulaire pour la création d'un nouvel évènement</h1>
          <h2>Titre :</h2>
          <input type="text_title"
            title='title'
            value={this.state.title}
            onChange={ e => this.setState({title: e.target.value})}/>

            <h2>Date :</h2>
          <input type="date"
            value={this.state.eventDate}
            onChange={ e => this.setState({eventDate: e.target.value})}/>

            <h2>Choix de la catégorie :</h2>
          <select name="categoryId" id="categoryId"
            value={this.state.categoryId}
            onChange={ e => this.setState({categoryId: e.target.value})}>
            <option value="1">presse</option>
            <option value="2">actualité</option>
            <option value="3">évènement</option>
            <option value="4">article</option>
          </select>

          <h2>Résumé :</h2>
          <textarea type="text_resume"
            value={this.state.shortDescription}
            onChange={ e => this.setState({shortDescription: e.target.value})}/>

          <h2>Description :</h2>
          <textarea type="text_description"
            value={this.state.description}
            onChange={ e => this.setState({description: e.target.value})}/>

          <h2>Lien de l'image :</h2>
          <input type="text_URL"
            value={this.state.imageURL}
            onChange={ e => this.setState({imageURL: e.target.value})}/>

          <h2>Description de l'image :</h2>
          <input type="text_description_image"
            value={this.state.imageDescription}
            onChange={ e => this.setState({imageDescription: e.target.value})}/>

          <input type='checkbox' name='checkbox'/>
          <p>Ressources</p>

          <button type="submit" value="submit">Ajouter</button>
          </label>
        </form>
      </div>
    )
  }
}

export default Form
