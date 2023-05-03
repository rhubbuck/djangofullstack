import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ReactPropTypes } from 'react';
import { getAppointments, deleteAppointment } from '../../actions/appointments';
import { PropTypes } from 'prop-types';

export class Appointments extends Component {
    static propTypes = {
        appointments: PropTypes.array.isRequired,
        getAppointments: PropTypes.func.isRequired,
        deleteAppointment: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getAppointments();
    }

  render() {
    return (
        <Fragment>
        <div className='form-container'>
            <h2>Registered Vehicles</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Miles</th>
                        <th>Price</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    { this.props.appointments.map(appt => (
                        <tr key={appt.id}>
                            <td>{appt.event}</td>
                            <td>{appt.location}</td>
                            <td>{appt.year}</td>
                            <td>{appt.miles}</td>
                            <td>{appt.price}</td>
                            <td><button 
                            className='btn btn-danger btn-sm' 
                            onClick={this.props.deleteAppointment.bind(this, appt.id)}
                            >Delete</button></td>
                        </tr>
                    )) }
                </tbody>
            </table>
            </div>
        </Fragment>
    )
  }
}

const mapStateToProps = state => ({
    appointments: state.appointments.appointments
});

export default connect(mapStateToProps, { getAppointments, deleteAppointment })(Appointments);