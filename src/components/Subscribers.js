import React from 'react'
import './Subscribers.css'

const Subscribers = ({ subscribers }) => {
  return (
    <div className="containerSusbscribers">

      <div className="admin-subscribers-title"><span>Abonnés à la Newsletter</span></div>

      <tr>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Téléphone</th>
        <th>E-mail</th>
        <th>Infos</th>
      </tr>
      {subscribers.map(subscriber =>
        <div key={subscriber.id} className="subscribers" >
          <table>

            <tr>
              <td >{subscriber.lastName}</td>
              <td className="tableSubscribers">{subscriber.firstName}</td>
              <td className="tableSubscribers">{subscriber.phoneNumber}</td>
              <td className="tableSubscribers">{subscriber.email}</td>
              <td className="tableSubscribers">{subscriber.reuseableInfo ? 'Oui' : 'Non'}</td>
            </tr>
          </table>

        </div>
      )}
    </div>
  )
}

export default Subscribers
