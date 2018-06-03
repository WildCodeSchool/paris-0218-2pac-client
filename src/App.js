import React, { Component } from 'react'
import Calendar from './component/Calendar/'
const style = {
  position: 'relative',
  margin: '50px auto'
}
class App extends Component {
  onDayClick = (e, day) => {
    alert(day)
  }
  render () {
    return (
      <div className='App'>
      futur componenent
        <Calendar style={style} width='302px'
          onDayClick={(e, day) => this.onDayClick(e, day)}/>
      </div>
    )
  }
}
export default App
