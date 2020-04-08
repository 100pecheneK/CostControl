import {ADD_BALANCE, GET_USER_MONEY_INFO} from './types'
import axios from 'axios'
import {tokenConfig} from "./auth"
import {reset} from "redux-form"
import history from "../history"

export const getUserMoneyInfo = () => async (dispatch, getState) => {
    const res = await axios.get('/api/user/money_info', tokenConfig(getState))
    dispatch({
        type: GET_USER_MONEY_INFO,
        payload: res.data
    })
}

export const addBalance = (formValues) => async (dispatch, getState) => {
    const res = await axios.post('/api/user/add_balance', {...formValues}, tokenConfig(getState))
    dispatch({
        type: ADD_BALANCE,
        payload: res.data
    })
    dispatch(reset('addBalance'))
    history.push('/');
}
