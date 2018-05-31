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
//popup month 
	setMonth = (month) => {
		let monthNo = this.months.indexOf(month)
		let dateContext = Object.assign({},this.state.dateContext)
		dateContext = moment(dateContext).set("month", monthNo)
		this.setState({
			dateContext: dateContext
		})
	}

	nextMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onNextMonth && this.props.onNextMonth();
    }

    prevMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onPrevMonth && this.props.onPrevMonth();
    }

	onSelectChange = (event, data) => {
		this.setMonth(data)
		this.props.onMonthChange && this.props.onMonthChange()
	}

    SelectList = (props) => {
    	let popup = props.data.map((data) => {
    		return (
    			<div key={data}>
    				<a href="#" onClick={(event)=>{this.onSelectChange(event, data)}}>
    					{data}
    				</a>
    			</div>
    		)
    	})

    	return(
    		<div className="month-popup">
    			{popup}
    		</div>
    	)
  	}
 
  	onChangeMonth = (event, month) => {
  		this.setState({
  			showMonthPopup: !this.state.showMonthPopup
  		})

  	}

    MonthNav = () => {
    	return(
    		<span className="label-month"
    			onClick={(event) => {this.onChangeMonth(event, this.month())}}>
	    		{this.month()}
	    		{this.state.showMonthPopup && 
	    			<this.SelectList data={this.months} />
	    		}
    		</span>
    	)
    }

    showYearEditor = () => {
        this.setState({
            showYearNav: true
        });
    }

    setYear = (year) => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        this.setState({
            dateContext: dateContext
        })
    }

    onYearChange = (event) => {
        this.setYear(event.target.value);
        this.props.onYearChange && this.props.onYearChange(event, event.target.value);
    }

    onKeyUpYear = (event) => {
        if (event.which === 13 || event.which === 27) {
            this.setYear(event.target.value);
            this.setState({
                showYearNav: false
            })
        }
    }

    YearNav = () => {
        return (
            this.state.showYearNav ?
            <input
                defaultValue = {this.year()}
                className="editor-year"
                ref={(yearInput) => { this.yearInput = yearInput}}
                onKeyUp= {(event) => this.onKeyUpYear(event)}
                onChange = {(event) => this.onYearChange(event)}
                type="number"
                placeholder="year"/> :
            <span
                className="label-year"
                onDoubleClick={(event)=> { this.showYearEditor()}}>
                {this.year()}
            </span>
        );
    }

    onDayClick = (event, day) => {
        this.setState({
            selectedDay: day
        }, () => {
            console.log("SELECTED DAY: ", this.state.selectedDay);
        });

        this.props.onDayClick && this.props.onDayClick(event, day);
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

        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let className = (d == this.currentDay() ? "day current-day": "day");
            let selectedClass = (d == this.state.selectedDay ? " selected-day " : "")
            daysInMonth.push(
                <td key={d} className={className + selectedClass} >
                    <span onClick={(e)=>{this.onDayClick(e, d)}}>{d}</span>
                </td>
            );
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
			   				<td colSpan="5">
			   					<this.MonthNav />
			   					{" "}
			   					<this.YearNav />
			   				</td>
			   				<td colSpan="2" className="nav-month">
                                <i className="prev fa fa-fw fa-chevron-left"
                                    onClick={(event)=> {this.prevMonth()}}>
                                </i>
                                <i className="prev fa fa-fw fa-chevron-right"
                                    onClick={(event)=> {this.nextMonth()}}>
                                </i>
                            </td>
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