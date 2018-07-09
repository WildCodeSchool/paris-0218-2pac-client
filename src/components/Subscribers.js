import React from 'react'
import './Subscribers.css'

const Subscribers = ({ subscribers }) => {
  return (
    <div>

      <caption>Abonnés à la Newsletter</caption>

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
              <td>{subscriber.lastName}</td>
              <td>{subscriber.firstName}</td>
              <td>{subscriber.phoneNumber}</td>
              <td>{subscriber.email}</td>
              <td>{subscriber.reuseableInfo ? 'O' : 'N'}</td>
            </tr>
          </table>

        </div>
      )}
    </div>
  )
}

export default Subscribers
