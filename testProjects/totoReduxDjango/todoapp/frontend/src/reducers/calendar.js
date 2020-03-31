import {CHANGE_DATE} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
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
