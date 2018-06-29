import React from 'react'

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Titre de l'article :
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Catégorie d'article :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="news">Actualité</option>
            <option value="event">Evénement</option>
            <option value="newspaper">Presse</option>
            <option value="newsrelease">Communiqué de presse</option>
          </select>
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

  export default ArticleForm
