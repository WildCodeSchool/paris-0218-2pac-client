import React from 'react'
import './AdminSubscribers.css'
import { CSVLink } from 'react-csv'

const SubscriberCard = ({ subscriber }) =>
  <tr className="subscribers">
    <td>{subscriber.lastName}</td>
    <td>{subscriber.firstName}</td>
    <td>{subscriber.phoneNumber}</td>
    <td>{subscriber.email}</td>
    <td>{subscriber.reuseableInfo ? 'oui' : 'non'}</td>
  </tr>

const prepareSubscriber = subscriber => ({
  date: subscriber.createdAt,
  nom: subscriber.lastName,
  prenom: subscriber.firstName,
  telephone: subscriber.phoneNumber,
  mail: subscriber.email,
  rgpd: subscriber.reuseableInfo ? 'oui' : 'non'
})
const prepareSubscribers = subscribers => subscribers.map(prepareSubscriber)

const AdminSubscribers = ({ subscribers }) => {
  const subscribersCards = subscribers
    .map(subscriber => <SubscriberCard key={subscriber.id} subscriber={subscriber} />)

  return (
    <div id='admin-subscribers' className="container">
      <span><b>{subscribers.length}</b> abonnés</span>
      <button className="csv-button"><CSVLink data={prepareSubscribers(subscribers)} filename={'subscribers.csv'}>Télécharger (au format csv)</CSVLink></button>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Téléphone</th>
            <th>E-mail</th>
            <th>RGPD</th>
          </tr>
        </thead>
        <tbody>
          {subscribersCards}
        </tbody>
      </table>
    </div>
  )
}

export default AdminSubscribers
