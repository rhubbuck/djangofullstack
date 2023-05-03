import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ReactPropTypes } from 'react';
import { getAllAppointments } from '../../actions/appointments';
import { PropTypes } from 'prop-types';

export class Appointments extends Component {

    static propTypes = {
        appointments: PropTypes.array.isRequired,
        getAllAppointments: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getAllAppointments();
    }

  render() {
    return (
        <Fragment>
          <div className='form-container'>
          <div className='feed-container'>
            <div className='feed-header'>
              <div><h4>Year</h4></div>
              <div><h4>Make</h4></div>
              <div><h4>Model</h4></div>
              <div><h4>Miles</h4></div>
              <div><h4>Price</h4></div>
            </div>
          </div>       
            { this.props.appointments.filter(appt => appt.year).map(appt => (
              <div key={appt.id}  className='feed-card'>
                <div><h6>{appt.year}</h6></div>
                <div><h6>{appt.event}</h6></div>
                <div><h6>{appt.location}</h6></div>
                <div><h6>{appt.miles}</h6></div>
                <div><h6>{appt.price}</h6></div>
              </div>             
              ))}
            </div>
        </Fragment>
    )
  }
}

const mapStateToProps = state => ({
    appointments: state.appointments.appointments
});

export default connect(mapStateToProps, { getAllAppointments })(Appointments);