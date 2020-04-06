import { GET_USER_MONEY_INFO} from './types'
import axios from 'axios'
import {tokenConfig} from "./auth"

export const getUserMoneyInfo = () => async (dispatch, getState) => {
    const res = await axios.get('/api/user/money_info', tokenConfig(getState))
    dispatch({
        type: GET_USER_MONEY_INFO,
        payload: res.data
    })
}
