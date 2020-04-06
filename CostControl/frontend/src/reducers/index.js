import {combineReducers} from "redux"
import {reducer as formReducer} from "redux-form"
import costs from "./costs"
import calendar from './calendar'
import categories from "./categories"
import report from "./report"
import auth from "./auth"
import user from './user'
import {LOGOUT_SUCCESS} from "../actions/types"

const appReducer = combineReducers({
    form: formReducer,
    calendar,
    costs,
    categories,
    report,
    auth,
    user
})

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_SUCCESS) {
        state = undefined
    }
    return appReducer(state, action)
}
export default rootReducer