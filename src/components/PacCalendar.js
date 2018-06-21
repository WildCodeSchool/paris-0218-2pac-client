import React from 'react'
import Calendar from 'react-calendar'
import ModalEvent from './Calendar/ModalEvent'
import DatePicker from 'react-date-picker'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'

class PacCalendar extends React.Component {
  state = {
    date: new Date()
  }
  onChange = date => this.setState({ date })
  render () {
    return (
      <div>
      <Grid container
            alignItems='center'
            style={{ height:  '100%' }}
                >
                    <Grid  item  xs={12}
                    >
                        <Paper
                        elevation={4}
                        style={{ margin:  32 }}
                        >
                            <Grid
                            container
                            alignContent='center'
                            justify='center'
                            >
                            <Grid   item  xs={12}  sm={6}
                                    style={{ 'textAlign':  'center' }}
                            >
                            <Calendar
                                  onChange={this.onChange}
                                  value={this.state.date}
                                  />
                            </Grid>
                                <Grid
                                item  xs={12} sm={6}>
                                  <ModalEvent />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
      </div>
    )
  }
}
export default PacCalendar
