import React, { Component } from 'react'
import { Link, navigate } from '@reach/router'
import Label from '../components/Label'
import ChevronTitle from '../components/ChevronTitle'
import Calendar from 'react-calendar'
import './EventsCalendar.css'
import moment from 'moment'

moment.locale('fr')

const weekDaysFR = [ 'dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi' ]

const isSameDay = (d1, d2) =>
  d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()

const byEventDate = (e1, e2) => new Date(e1.eventDate) - new Date(e2.eventDate)

const EventCalendarCard = ({ event }) =>
  <div className="events-calendar-card">
    <Label>{(new Date(event.eventDate)).toLocaleDateString()}</Label>
    <span className="bold ml-2">{event.title}</span>
    {/*<div className="mt-2">{event.shortDescription}</div>*/}
    <div><Link className="link" to={`/article/${event.id}`}>> Lire la suite</Link></div>
    <div className="divider" />
  </div>


class EventsCalendar extends Component {
  onClickDay = date => {
    const { events } = this.props

    const event = events.find(event => isSameDay(new Date(event.eventDate), date))

    if (event) {
      navigate(`/article/${event.id}`)
    }
  }

  getTileClassName = ({ date, view }) => {
    const { events } = this.props
    const eventDates = events.map(event => new Date(event.eventDate))

    if (view !== 'month') { return }

    // THIS SUPPOSE THERE IS ONLY 1 EVENT PER DAY
    const hasEventThisDay = eventDates.some(eventDate => isSameDay(eventDate, date))

    return hasEventThisDay ? 'calendar-event-day' : 'calendar-no-event-day'
  }

  render () {
    const { events } = this.props

    const upComingEvents = events
      .filter(e => new Date(e.eventDate) >= new Date())
      .sort(byEventDate)
      .slice(0, 2)

    return (
      <div id="events-calendar-container" className="container">
        <h3><ChevronTitle ChevronColor="white" TextColor="white" title="Participer à un évènement" /></h3>
        <div className="flex row">
          <div className="flex-1">
            <Calendar
              locale="fr-FR"
              formatShortWeekday={date => weekDaysFR[(new Date(date)).getDay()].slice(0, 1)}
              showNeighboringMonth={false}
              minDetail="month"
              maxDetail="month"
              onClickDay={this.onClickDay}
              tileClassName={this.getTileClassName}
            />
          </div>
          <div className="flex-4 events-calendar-cards">
            {upComingEvents.map(event => <EventCalendarCard key={event.id} event={event} />)}
          </div>
        </div>
      </div>
    )

  }
}

export default EventsCalendar
