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
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Création d'un nouvel evenement</h2>
          <h1>{JSON.stringify(this.state, 1, 1)}</h1>

          <input type="text" style={{width: '45%'}}
            placeholder="Titre"
            title='title'
            value={this.state.title}
            onChange={ e => this.setState({title: e.target.value})}/>

          <input type="text" style={{width: '45%'}}
            placeholder="shortDescription"
            value={this.state.shortDescription}
            onChange={ e => this.setState({shortDescription: e.target.value})}/>

          <textarea type="text" style={{width: '45%'}}
            placeholder="description"
            value={this.state.description}
            onChange={ e => this.setState({description: e.target.value})}/>

          <input type="date" style={{width: '45%'}}
            placeholder="eventDate"
            value={this.state.eventDate}
            onChange={ e => this.setState({eventDate: e.target.value})}/>

          <select name="categoryId" id="categoryId"
            value={this.state.categoryId}
            onChange={ e => this.setState({categoryId: e.target.value})}>
            <option value="1">presse</option>
            <option value="2">actualité</option>
            <option value="3">évènement</option>
            <option value="4">article</option>

          </select>

          <input type="text" style={{width: '45%'}}
            placeholder="imageURL"
            value={this.state.imageURL}
            onChange={ e => this.setState({imageURL: e.target.value})}/>

          <input type="text" style={{width: '45%'}}
            placeholder="imageDescription"
            value={this.state.imageDescription}
            onChange={ e => this.setState({imageDescription: e.target.value})}/>

          <input type='checkbox' name='checkbox'/>
          <p> Créer votre évènement </p>

          <button type="submit" value="submit">Ajouter</button>
        </form>
      </div>
    )
  }
}

export default Form
