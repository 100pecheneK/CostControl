import {
    FETCH_COSTS_SUCCESS,
    FETCH_COSTS_REQUEST,
    FETCH_COSTS_FAILURE
} from "../action-types"

const updateCostsList = (state, action) => {
    if (state === undefined) {
        return {
            costs: [],
            loading: true,
            error: null,
        }
    }
    switch (action.type) {
        case FETCH_COSTS_SUCCESS:
            return {
                costs: [],
                loading: true,
                error: null
            }
        case FETCH_COSTS_REQUEST:
            return {
                costs: action.payload,
                loading: false,
                error: null
            }
        case FETCH_COSTS_FAILURE:
            return {
                costs: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.costsList
    }
}
export default updateCostsList