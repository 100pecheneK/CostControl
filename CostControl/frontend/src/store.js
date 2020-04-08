import {createStore, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers'
import {getUserMoneyInfo} from "./actions/user"
import axios from "axios"
import {tokenConfig} from "./actions/auth"
import {ADD_COST, GET_USER_MONEY_INFO} from "./actions/types"

const logMiddleware = ({getState, dispatch}) => (next) => (action) => {
    console.log('%c%s', 'color: #9e9e9e', action.type, getState())
    return next(action)
}

const userInfo = ({getState, dispatch}) => (next) => (action) => {
    if (action.userInfo){
        console.log('USER INFO HERE')
        const res = axios.get('/api/user/money_info', tokenConfig(getState))
        res.then(res=>next({
            type: GET_USER_MONEY_INFO,
            payload: res.data
        }))
        next({
            ...action
        })
    }
    return next(action)
}

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxThunk, logMiddleware, userInfo))
)
export default store