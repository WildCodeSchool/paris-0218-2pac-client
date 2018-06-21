import React from 'react'
import './form.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      date: '',
      dtime: '',
      fin: '',
      ftime: '',
      texte: ''
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
      date: '',
      dtime: '',
      fin: '',
      ftime: '',
      texte: ''
    })
    e.preventDefault()
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Création d'un nouvel evenement</h2>
          <h1>{JSON.stringify(this.state, 1, 1)}</h1>

          <TextField style={{width: '90%'}}
            placeholder="Titre"
            title='title'
            type='text'
            value={this.state.title}
            onChange={ e => this.setState({title: e.target.value})}/>

          <TextField style={{width: '45%'}}
            placeholder="Date"
            date='date'
            type='date'
            value={this.state.date}
            onChange={ e => this.setState({date: e.target.value})}/>

          <TextField style={{width: '45%'}}
            dtime='dtime'
            type='time'
            value={this.state.dtime}
            onChange={ e => this.setState({dtime: e.target.value})}/>

          <TextField style={{width: '45%'}}
            fin='fin'
            type='date'
            value={this.state.fin}
            onChange={ e => this.setState({fin: e.target.value})}/>

          <TextField style={{width: '45%'}}
            ftime='ftime'
            type='time'
            value={this.state.ftime}
            onChange={ e => this.setState({ftime: e.target.value})}/>

          <TextField style={{width: '90%'}}
            placeholder="Description"
            hintText="MultiLine with rows: 2 and rowsMax: 4"
            multiLine={true}
            rows={2}
            rowsMax={4}
            texte='texte'
            type='text'
            value={this.state.texte}
            onChange={ e => this.setState({texte: e.target.value})}/>

          <Button type="submit" value="submit">Ajouter</Button>
        </form>
      </div>
    )
  }
}

export default Form
