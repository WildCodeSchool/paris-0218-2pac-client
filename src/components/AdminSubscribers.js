import React from 'react'
import './AdminSubscribers.css'
import { CSVLink } from 'react-csv'

const SubscriberCard = ({ subscriber }) =>
  <tr className="subscribers">
    <td>{subscriber.lastName}</td>
    <td>{subscriber.firstName}</td>
    <td>{subscriber.phoneNumber}</td>
    <td>{subscriber.email}</td>
    <td>{subscriber.reuseableInfo ? 'Oui' : 'Non'}</td>
  </tr>

const AdminSubscribers = ({ subscribers }) => {
  const subscribersCards = subscribers
    .map(subscriber => <SubscriberCard key={subscriber.id} subscriber={subscriber} />)

  return (
    <div className="subscribers-container">
      <table className="subscriberTable">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Téléphone</th>
            <th>E-mail</th>
            <th>Infos</th>
          </tr>
        </thead>
        <tbody>
          {subscribersCards}
        </tbody>
      </table>
      <button className="csv-link">
        <CSVLink data={subscribers} filename={'subscribers.csv'}><span>Télécharger</span></CSVLink>
      </button>
    </div>
  )
}

export default AdminSubscribers
