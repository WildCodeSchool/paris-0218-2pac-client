import React, { Component } from 'react'
import ScrollUp from '../containers/utils/ScrollUp'
import CategoryLabel from '../components/CategoryLabel'
import './ResourcesPage.css'
import store from '../store'

const ResourceCard = ({ doc }) =>
  <a className="resource-card" target="_blank" href={doc.url}>
    <div className="flex column">
      <div className="flex row">
        <span className="resource-card-date">{(new Date(doc.createdAt)).toLocaleString().slice(0, -3)}</span>
        <span className="resource-card-title bold">{doc.title}</span>
        <CategoryLabel>{doc.type}</CategoryLabel>
      </div>
      <span className="mt-2">{doc.shortDescription}</span>
    </div>
  </a>

class ResourcesPage extends Component {
  state = {
    sortByDate: 1,
    filters: {
      typeId: '0'
    }
  }

  toggleSortByDate = () => {
    this.setState({ sortByDate: -this.state.sortByDate })
  }

  handleFilterChange = e => {
    const { name, value } = e.target

    this.setState({
      filters: { ...this.state.filters, [name]: value }
    })
  }

  render () {
    const documents = this.props.documents

    const { filters, sortByDate } = this.state

    const { loggedAs } = store.getState()

    const resourceCards = documents
      .filter(doc => filters.typeId === '0' || filters.typeId === String(doc.typeId))
      .sort((a, b) => sortByDate * ((new Date(b.createdAt)) - (new Date(a.createdAt))))
      .map(doc => <ResourceCard key={doc.id} doc={doc} />)

    return (
      <ScrollUp>
        <div id="resources-page" className="container">
          <div className="resources-filters">
            <input type="button" value={`${this.state.sortByDate > 0 ? '∨' : '∧'} Date`} onClick={this.toggleSortByDate} />
            <select name="typeId" value={this.state.filters.typeId} onChange={this.handleFilterChange}>
              <option value={0}>--- Filtrer par type ---</option>
              <option value={1}>Textes politiques</option>
              <option value={2}>Documents de position des organisations membres</option>
              { loggedAs ? <option value={3}>Documents réservés aux membres</option> : '' }
              <option value={4}>Travaux de recherche</option>
              <option value={5}>Autres documents de position</option>
            </select>
            <span><b>{resourceCards.length}</b> RESULTATS</span>
          </div>
          <div className="resources-cards">
            {resourceCards}
          </div>
        </div>
      </ScrollUp>
    )
  }
}

export default ResourcesPage
