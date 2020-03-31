import {createStore, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers'

const logMiddleware = ({getState, dispatch}) => (next) => (action) => {
    console.log('%c%s', 'color: #9e9e9e' , action.type, getState())
    return next(action)
}

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxThunk, logMiddleware))
)
export default store