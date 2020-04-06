import {GET_USER_MONEY_INFO} from "../actions/types"

export default (state = {}, action) => {
    switch (action.type) {
        case GET_USER_MONEY_INFO:
            return {
                ...action.payload
            }
        default:
            return state;
    }
};

