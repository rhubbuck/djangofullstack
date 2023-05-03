import React, { Fragment } from 'react';
import Form from './Form';
import Appointments from './Appointments';

export default function Dashboard() {
  return (
    <Fragment>
        <Form />
        <Appointments />
    </Fragment>
  )
}
