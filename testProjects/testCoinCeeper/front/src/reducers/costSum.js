import {
    FETCH_COST_SUM_SUCCESS,
    FETCH_COST_SUM_REQUEST,
    FETCH_COST_SUM_FAILURE
} from "../action-types"

const updateCostSumList = (state, action) => {
    if (state === undefined) {
        return {
            cost_sum: [],
            loading: true,
            error: null,
        }
    }
    switch (action.type) {
        case FETCH_COST_SUM_SUCCESS:
            return {
                cost_sum: [],
                loading: true,
                error: null
            }
        case FETCH_COST_SUM_REQUEST:
            return {
                cost_sum: action.payload,
                loading: false,
                error: null
            }
        case FETCH_COST_SUM_FAILURE:
            return {
                cost_sum: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.costSum
    }
}
export default updateCostSumList