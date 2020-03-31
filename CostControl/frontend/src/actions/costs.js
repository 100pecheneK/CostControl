import axios from 'axios'
import {GET_COSTS, ADD_COST, GET_CATEGORIES, DELETE_COST} from "./types"
import {reset} from "redux-form"
import history from "../history"

export const getCosts = () => async (dispatch, getState) => {
    const dateToServer = getState().calendar.dateToServer
    const q = dateToServer ? `?created_at=${dateToServer}` : ''
    const res = await axios.get(`/api/costs/${q}`)
    dispatch({
        type: GET_COSTS,
        payload: res.data
    })
}


export const addCost = formValues => async dispatch => {
    const res = await axios.post('/api/costs/', {...formValues})
    console.log('addCost', res)
    dispatch({
        type: ADD_COST,
        payload: res.data
    })
    dispatch(reset('costForm'))
    history.push('/');
}
export const deleteCost = id => async dispath => {
    await axios.delete(`api/costs/${id}/`)
    dispath({
        type: DELETE_COST,
        payload: id
    })
    history.push('/')
}


export const getCategories = () => async dispatch => {
    const res = await axios.get('/api/categories/')
    console.log('res', res)
    dispatch({
        type: GET_CATEGORIES,
        payload: res.data
    })
}