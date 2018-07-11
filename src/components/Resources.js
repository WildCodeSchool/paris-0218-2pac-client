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
    sortByDate: 1,
    filters: {
      typeId: 0
    },
  }

  toggleSortByDate = () => {
    this.setState({ sortByDate: -this.state.sortByDate })
  }

  handleFilterChange = e => {
    const { name, value } = e.target

    this.setState({ filters: { ...this.state.filters, [name]: value }})
  }

  render () {
    const documents = this.props.documents

    const { filters, sortByDate } = this.state

    const resourceCards = documents
      .filter(doc => !filters.typeId || filters.typeId == doc.typeId)
      .sort((a, b) => sortByDate * ((new Date(b.createdAt)) - (new Date(a.createdAt))))
      .map(doc => <ResourceCard key={doc.id} doc={doc} />)

    return (
      <div>
        <div className="resource-filters">
          <input type="button" value={`${this.state.sortByDate > 0 ? '▼' : '▲'} date`} onClick={this.toggleSortByDate} />
          <label>type
            <select name="typeId" value={this.state.filters.typeId} onChange={this.handleFilterChange}>
              <option value={0}></option>
              <option value={1}>Textes politiques</option>
              <option value={2}>Documents de position des organisations membres</option>
              <option value={3}>Documents réservés aux membres</option>
              <option value={4}>Travaux de recherche</option>
              <option value={5}>Autres documents de position</option>
            </select>
          </label>
        </div>
        <div className="resource-cards">
          <span>{resourceCards.length} resultats</span>
          {resourceCards}
        </div>
      </div>
    )
  }
}

export default Resources
