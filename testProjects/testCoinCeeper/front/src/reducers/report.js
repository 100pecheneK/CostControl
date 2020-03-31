import {
    FETCH_REPORT_SUCCESS,
    FETCH_REPORT_REQUEST,
    FETCH_REPORT_FAILURE
} from "../action-types"

const updateReport = (state, action) => {
    if (state === undefined) {
        return {
            report: [],
            loading: true,
            error: null,
        }
    }
    switch (action.type) {
        case FETCH_REPORT_SUCCESS:
            return {
                report: [],
                loading: true,
                error: null
            }
        case FETCH_REPORT_REQUEST:
            return {
                report: action.payload,
                loading: false,
                error: null
            }
        case FETCH_REPORT_FAILURE:
            return {
                report: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.report
    }
}
export default updateReport