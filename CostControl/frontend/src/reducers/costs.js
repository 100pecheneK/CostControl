import _ from 'lodash'
import {ADD_COST, DELETE_COST, GET_CATEGORIES, GET_COSTS} from "../actions/types"

export default (state = {}, action) => {
    switch (action.type) {
        case GET_COSTS:
            return {
                ..._.mapKeys(action.payload, 'id')
            }
        case ADD_COST:
            return {
                ...state,
                [action.payload.id]: action.payload,
            }
        case DELETE_COST:
            return _.omit(state, action.payload)
        default:
            return state
    }
}