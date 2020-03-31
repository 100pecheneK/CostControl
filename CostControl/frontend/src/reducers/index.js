import {combineReducers} from "redux"
import {reducer as formReducer} from "redux-form"
import costs from "./costs"
import calendar from './calendar'
import categories from "./categories"
import report from "./report"

export default combineReducers({
    form: formReducer,
    calendar,
    costs,
    categories,
    report
})