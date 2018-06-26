import React from 'react'
import Calendar from 'react-calendar'

class PacCalendar extends React.Component {
  state = {
    date: new Date()
  }
  onChange = date => this.setState({ date })
  render () {
    return (
      <div>
        <Calendar />
      </div>
    )
  }
}
export default PacCalendar
