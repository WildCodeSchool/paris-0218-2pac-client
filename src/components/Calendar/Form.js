import React from 'react'
import './form.css'

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

          <h1>{JSON.stringify(this.state, 1, 1)}</h1>

          <label>Title event</label>
          <input title='title'
            type='text'
            value={this.state.title}
            onChange={ e => this.setState({title: e.target.value})}/>

          <label>date</label>
          <input date='date'
            type='date'
            value={this.state.date}
            onChange={ e => this.setState({date: e.target.value})}/>

          <input dtime='dtime'
            type='time'
            value={this.state.dtime}
            onChange={ e => this.setState({dtime: e.target.value})}/>

          <label>Fin</label>
          <input fin='fin'
            type='date'
            value={this.state.fin}
            onChange={ e => this.setState({fin: e.target.value})}/>

          <input ftime='ftime'
            type='time'
            value={this.state.ftime}
            onChange={ e => this.setState({ftime: e.target.value})}/>

          <label>
              Description :
            <textarea texte='texte'
              type='text'
              value={this.state.texte}
              onChange={ e => this.setState({texte: e.target.value})}/>
          </label>

          <button type="submit" value="submit">Ajouter</button>
          <button>Effacer</button>
        </form>
      </div>
    )
  }
}

export default Form
