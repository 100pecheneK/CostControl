import axios from 'axios'
import {GET_REPORT} from './types'
import {tokenConfig} from "./auth"

export const getReport = () => async (dispatch, getState) => {
    const dateToServer = getState().calendar.dateToServer
    const q = dateToServer ? `?created_at=${dateToServer}` : ''
    const res = await axios.get(`/api/costReport/${q}`, tokenConfig(getState))
    dispatch({
        type: GET_REPORT,
        payload: res.data
    })
}
