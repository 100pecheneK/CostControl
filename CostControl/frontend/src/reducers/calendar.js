import {CHANGE_DATE, INITIALIZE_DATE} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case INITIALIZE_DATE:
            return {
                date: action.date,
                dateToServer: action.dateToServer
            }
        case CHANGE_DATE:
            return {
                ...state,
                date: action.date,
                dateToServer: action.dateToServer
            }
        default:
            return state;
    }
};
