import axios from 'axios'
import {GET_COSTS, ADD_COST, DELETE_COST} from "./types"
import {reset} from "redux-form"
import history from "../history"
import {tokenConfig} from "./auth"

export const getCosts = () => async (dispatch, getState) => {
    const dateToServer = getState().calendar.dateToServer
    const q = dateToServer ? `?created_at=${dateToServer}` : ''
    const res = await axios.get(`/api/costs/${q}`, tokenConfig(getState))

    dispatch({
        type: GET_COSTS,
        payload: res.data
    })
}

export const addCost = formValues => async (dispatch, getState) => {
    const res = await axios.post('/api/costs/', {...formValues}, tokenConfig(getState))
    dispatch({
        type: ADD_COST,
        payload: res.data,
        userInfo: true
    })
    dispatch(reset('costForm'))
    history.push('/');
}

export const deleteCost = id => async (dispatch, getState) => {
    await axios.delete(`api/costs/${id}/`, tokenConfig(getState))
    dispatch({
        type: DELETE_COST,
        payload: id,
        userInfo: true
    })
    history.push('/')
}

