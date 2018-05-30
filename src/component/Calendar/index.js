import React, { Component } from 'react'
import moment from 'moment' //instal npm moment
import './calendar.css'

class Calendar extends Component {

	state ={
		dateContext: moment(),
		today: moment(),
		showMonthPopup: false,
		showYearPopup: false
	}

	constructor(props) {
		super(props)
		this.width = props.width || "350px"
		this.style = props.style || {}
		this.style.width = this.width
	}

	weekdays = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
    weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    months = moment.months()

	year = () => {
        return this.state.dateContext.format("Y");
    }
    month = () => {
        return this.state.dateContext.format("MMMM");
    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }
    currentDate = () => {
        console.log("currentDate: ", this.state.dateContext.get("date"));
        return this.state.dateContext.get("date");
    }
    currentDay = () => {
        return this.state.dateContext.format("D");
    }

    firstDayOfTheMonth = () => {
    	let dateContext = this.state.dateContext
    	let firstDay = moment(dateContext).startOf('month').format('d')//day of week
    	return firstDay
    }

	render(){
		// Map the weekdays i.e Sun, Mon, Tue etc as <td>
        let weekdays = this.weekdaysShort.map((day) => {
            return (
                <td key={day} className="week-day">{day}</td>
            )
        });

        let blanks = []
        for (let i = 0; i < this.firstDayOfTheMonth(); i++) {
        	blanks.push(<td key={i * 80} className="emptySlot">
        		{""}
        		</td>
        	)
        }

        console.log("blanks; ", blanks)

        let daysInMonth = []
        for (let d = 1; d <= this.daysInMonth(); d++) {
        	let className = (d === this.currentDay() ? "day current-day": "day")
			daysInMonth.push(
				<td key={d} className={className} >
					<span>{d}</span>
				</td>
				)
        }

        console.log("days: ", daysInMonth)

//condition pour 7 jours par row
        const totalSlots = [...blanks, ...daysInMonth]
        let rows = []
        let cells = []

        totalSlots.forEach((row, i) => {

        	if ((i % 7) !== 0) {
                cells.push(row);

            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }

            if (i === totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        })
        

        let trElems = rows.map((d, i) => {
        	return(
        		<tr key = {i*100}>
        			{d}
        		</tr>
        	)
        })

		return(
			<div className=	"calendar-container" style = {this.style} >
			   <table className="calendar">
			   		<thead>
			   			<tr className="calendar-header">
			   			</tr>
			   		</thead>
			   		<tbody>
			   			<tr>
			   			{weekdays}
			   			</tr>
			   			{trElems}
			   		</tbody>
			   	</table>
			</div>

		)
	}
}

export default Calendar