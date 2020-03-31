import {
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_FAILURE,
} from '../action-types'

const updateLogin = (state, action) => {
    if (state === undefined) {
        return {
            user: []
        }
    }
    switch (action.type) {
        case FETCH_LOGIN_SUCCESS:
            return {
                user: [],
                loading: true,
                error: null
            }
        case FETCH_LOGIN_REQUEST:
            return {
                user: action.payload,
                loading: false,
                error: null
            }
        case FETCH_LOGIN_FAILURE:
            return {
                user: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.user
    }
}
export default updateLogin