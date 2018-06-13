import React from 'react'
import Calendar from 'react-calendar'
import ModalEvent from './Calendar/ModalEvent'
import DatePicker from 'react-date-picker'

class PacCalendar extends React.Component {
  state = {
    date: new Date()
  }
  onChange = date => this.setState({ date })
  render () {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        <ModalEvent />
        <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    )
  }
}
export default PacCalendar
