import axios from 'axios'
import {stopSubmit} from "redux-form"

import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
} from './types'


export const loadUser = () => async (dispatch, getState) => {
    dispatch({type: USER_LOADING})
    try {
        const res = await axios.get('/api/auth/user', tokenConfig(getState))
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}


export const register = ({username, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({username, email, password})
    try {
        const res = await axios.post('/api/auth/register', body, config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: REGISTER_FAIL
        })
        dispatch(stopSubmit('registerForm', e.response.data))
    }
}

export const login = ({username, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({username, password})
    try {
        const res = await axios.post('/api/auth/login', body, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: LOGIN_FAIL
        })
        dispatch(stopSubmit('loginForm', e.response.data))
    }
}

export const logout = () => async (dispatch, getState) => {
    await axios.post('/api/auth/logout', null, tokenConfig(getState))
    dispatch({
        type: LOGOUT_SUCCESS
    })
}

export const tokenConfig = getState => {
    const token = getState().auth.token

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }
    return config
}


