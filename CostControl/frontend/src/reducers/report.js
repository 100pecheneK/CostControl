import {GET_REPORT} from "../actions/types"


export default (state = {}, action) => {
    switch (action.type) {
        case GET_REPORT:
            return {
                ...action.payload
            }
        default:
            return state;
    }
};
