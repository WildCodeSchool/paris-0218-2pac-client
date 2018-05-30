import React, { Component } from 'react'

import Calendar from './component/Calendar/' //import du component calendar

const style = {
	position: "relative",
	margin: "50px auto"
}

class App extends Component {
  render () {
    return (
      <div> 
      	futur componenent
      	<Calendar style={style} width="302px" />
      </div>
    )
  }
}

export default App
