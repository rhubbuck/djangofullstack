import { GET_APPOINTMENTS, DELETE_APPOINTMENT, ADD_APPOINTMENT, GET_ALL_APPOINTMENTS, LIKE } from '../actions/types.js';

const initalState = {
    appointments: [

    ]
}

export default function(state = initalState, action) {
    switch(action.type) {
        case GET_APPOINTMENTS:
        case GET_ALL_APPOINTMENTS:
        case LIKE:
            return {
                ...state,
                appointments: action.payload
            };
        case DELETE_APPOINTMENT:
            return {
                ...state,
                appointments: state.appointments.filter(appt => appt.id !== action.payload)
            };
        case ADD_APPOINTMENT:
            return {
                ...state,
                appointments: [...state.appointments, action.payload]
            };
        default:
            return state;
    }
}