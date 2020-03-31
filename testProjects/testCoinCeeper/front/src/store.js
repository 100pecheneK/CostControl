import {createStore, compose, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import reducer from "./reducers"


// Middleware
const logMiddleware = ({getState, dispatch}) => (next) => (action) => {
    console.log(action.type, getState())
    return next(action)
}

const store = createStore(reducer, applyMiddleware(
    thunkMiddleware,
    logMiddleware
))


export default store