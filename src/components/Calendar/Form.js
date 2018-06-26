import React from 'react'
import './form.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      eventDate: '',
      title: '',
      shortDescription: '',
      description: '',
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
      eventDate: '',
      title: '',
      shortDescription: '',
      description: '',
    })

    fetch("/auth/articles",

    {
          method: 'POST',
          headers: new Headers({'Content-Type':  'application/json'
    }),
          body:  JSON.stringify(this.state),
      })
          .then(res => res.json())
          .then(
            res  =>  this.setState({"flash":  res.flash}),
            err  =>  this.setState({"flash":  err.flash})
      )
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}
              style={{background: 'white'}}
              >
          <h2>Création d'un nouvel evenement</h2>
          <h1>{JSON.stringify(this.state, 1, 1)}</h1>

          <TextField style={{width: '45%'}}
            placeholder="eventDate"
            date='date'
            type='date'
            value={this.state.eventDate}
            onChange={ e => this.setState({eventDate: e.target.value})}/>

          <TextField style={{width: '90%'}}
            placeholder="Titre"
            title='title'
            type='text'
            value={this.state.title}
            onChange={ e => this.setState({title: e.target.value})}/>

          <TextField style={{width: '90%'}}
            placeholder ='shortDescription'
            type='text'
            value={this.state.shortDescription}
            onChange={ e => this.setState({shortDescription: e.target.value})}/>

          <TextField style={{width: '90%'}}
            placeholder="Description"
            hintText="MultiLine with rows: 2 and rowsMax: 4"
            multiLine={true}
            rows={2}
            rowsMax={4}
            texte='texte'
            type='text'
            value={this.state.description}
            onChange={ e => this.setState({description: e.target.value})}/>

          <Button type="submit" value="submit">Ajouter</Button>
        </form>
      </div>
    )
  }
}

export default Form
