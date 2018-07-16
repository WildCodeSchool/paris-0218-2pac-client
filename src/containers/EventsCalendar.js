import React, { Component } from 'react'
import { navigate } from '@reach/router'
import Calendar from 'react-calendar'
import './EventsCalendar.css'

const isSameDay = (d1, d2) =>
  d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()

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
    return <Calendar locale="fr-FR" onClickDay={this.onClickDay} tileClassName={this.getTileClassName} />
  }
}

export default EventsCalendar
