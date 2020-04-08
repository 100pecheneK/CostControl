import {ADD_BALANCE, GET_USER_MONEY_INFO} from "../actions/types"

export default (state = {}, action) => {
    switch (action.type) {
        case GET_USER_MONEY_INFO:
            return {
                ...action.payload
            }
        case ADD_BALANCE:
            console.log('😡', state)
            console.log({
                ...state,
                ...action.payload
            })
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

