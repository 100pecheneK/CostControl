import axios from "axios"
import {GET_CATEGORIES} from "./types"
import {tokenConfig} from "./auth"

export const getCategories = () => async (dispatch, getState) => {
    const res = await axios.get('/api/categories/', tokenConfig(getState))
    dispatch({
        type: GET_CATEGORIES,
        payload: res.data
    })
}