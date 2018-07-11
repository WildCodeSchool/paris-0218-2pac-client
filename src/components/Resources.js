import React, { Component } from 'react'
import api from '../api'
import './Resources.css'

const ResourceCard = ({ doc }) =>
  <div className="resource" >
    <span>{doc.createdAt}</span>
    <span>{doc.title}</span>
    <div className="category_resources">{doc.type}</div>
    <a target="_blank" href={`${api.hostUrl}/medias/documents/${doc.url}`}>Télécharger</a>
  </div>

class Resources extends Component {

  state = {
    sortByDate: 1
  }

  toggleSortByDate = () => {
    this.setState({ sortByDate: -this.state.sortByDate })
  }

  render () {
    const documents = this.props.documents
    const resourceCards = documents
      .sort((a, b) => this.state.sortByDate * ((new Date(b.createdAt)) - (new Date(a.createdAt))))
      .map(doc => <ResourceCard key={doc.id} doc={doc} />)

    return (
      <div>
        <div className="resource-filters">
          <input type="button" value={`${this.state.sortByDate > 0 ? '▼' : '▲'} date`} onClick={this.toggleSortByDate} />
        </div>
        <div className="resource-cards">{resourceCards}</div>
      </div>
    )
  }
}

export default Resources
