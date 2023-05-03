import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAppointment } from '../../actions/appointments';

export class Form extends Component {
  state = {
    event: '',
    location: '',
    year: '',
    miles: '',
    price: ''
  };

  static propTypes = {
    addAppointment: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { event, location, year, miles, price } = this.state;
    const appointment = { event, location, year, miles, price};
    this.props.addAppointment(appointment);
    this.setState({
      event: '',
      location: '',
      year: '',
      miles: '',
      price: ''
    });
  };

  render() {
    const { event, location, year, miles, price } = this.state;
    return (
      <div className='form-container'>
        <div className="card card-body mt-4 mb-4">
          <h2>Add Vehicle</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group ">
              <label className='form-label'>Make</label>
              <input
                className="form-control"
                type="text"
                name="event"
                onChange={this.onChange}
                value={event}
              />
            </div>
            <div className="form-group">
              <label className='form-label'>Model</label>
              <input
                className="form-control"
                type="text"
                name="location"
                onChange={this.onChange}
                value={location}
              />
            </div>
            <div className="form-group">
              <label className='form-label'>Year</label>
              <input
                className="form-control"
                type="text"
                name="year"
                onChange={this.onChange}
                value={year}
              />
            </div>
            <div className="form-group">
              <label className='form-label'>Miles</label>
              <input
                className="form-control"
                type="text"
                name="miles"
                onChange={this.onChange}
                value={miles}
              />
            </div>
            <div className="form-group">
              <label className='form-label'>Price</label>
              <input
                className="form-control"
                type="text"
                name="price"
                onChange={this.onChange}
                value={price}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addAppointment })(Form);