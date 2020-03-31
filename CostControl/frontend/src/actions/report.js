import axios from 'axios'
import {GET_REPORT} from './types'

export const getReport = () => async (dispatch, getState) => {
    const dateToServer = getState().calendar.dateToServer
    const q = dateToServer ? `?created_at=${dateToServer}` : ''
    const res = await axios.get(`/api/costReport/${q}`)
    dispatch({
        type: GET_REPORT,
        payload: res.data
    })
}
