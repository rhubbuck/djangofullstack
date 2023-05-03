import axios from 'axios';
import { GET_APPOINTMENTS, GET_ALL_APPOINTMENTS, DELETE_APPOINTMENT, ADD_APPOINTMENT } from './types';
import { tokenConfig } from './auth';

// function to get appts
export const getAppointments = () => (dispatch, getState) => {
    axios.get('/api/appointments/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_APPOINTMENTS,
                payload: res.data 
            });
        }).catch(err => console.log(err));
};

// function to get all appts for feed
export const getAllAppointments = () => (dispatch, getState) => {
    axios.get('/api/feed/')
        .then(res => {
            dispatch({
                type: GET_ALL_APPOINTMENTS,
                payload: res.data 
            });
        }).catch(err => console.log(err));
};

// function to delete appts
export const deleteAppointment = (id) => (dispatch, getState) => {
    axios.delete(`/api/appointments/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_APPOINTMENT,
                payload: id
            });
        }).catch(err => console.log(err));
};

// function to add appt
export const addAppointment = appt => (dispatch, getState) => {
    axios.post('/api/appointments/', appt, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_APPOINTMENT,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

// function to 'like' post
// export const likePost = (appt) => (dispatch, getState) => {
//     axios.patch(`/api/feed/${appt.id}/`, {
//         "attribute": "likes",
//         "operation": "add",
//         "value": "1" // the article id
//     })
//         .then(res => {
//             dispatch({
//                 type: LIKE,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err));
// };

// function to add to feed
export const addToFeed = appt => (dispatch, getState) => {
    axios.post('/api/appointments/', appt, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_APPOINTMENT,
                payload: res.data
            });
        }).catch(err => console.log(err));
};