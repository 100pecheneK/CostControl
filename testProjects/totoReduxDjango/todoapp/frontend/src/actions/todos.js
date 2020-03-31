import axios from 'axios'
import { reset } from "redux-form"
import history from "../history"
import { GET_TODOS, GET_TODO, ADD_TODO, DELETE_TODO, EDIT_TODO } from './types';
import { tokenConfig } from './auth'

export const getTodo = id => async (dispatch, getState) => {
    const res = await axios.get(`/api/todos/${id}`, tokenConfig(getState))
    dispatch({
        type: GET_TODO,
        payload: res.data
    })
}

export const getTodos = () => async (dispatch, getState) => {
    const dateToServer = getState().calendar.dateToServer
    console.log(`TODO: Протестируй тут это dateToServer ? '?date=${dateToServer}' : ''`);
    const q = dateToServer !== '' ? `?date=${dateToServer}` : ''
    const res = await axios.get(`/api/todos/${q}`, tokenConfig(getState))
    dispatch({
        type: GET_TODOS,
        payload: res.data
    })
}

export const addTodo = formValues => async (dispatch, getState) => {
    const res = await axios.post('/api/todos/', { ...formValues }, tokenConfig(getState))
    dispatch({
        type: ADD_TODO,
        payload: res.data
    })
    dispatch(reset('todoForm'))
}

export const editTodo = (id, formValues) => async (dispatch, getState) => {
    const res = await axios.patch(`/api/todos/${id}/`, formValues, tokenConfig(getState));
    dispatch({
        type: EDIT_TODO,
        payload: res.data
    })
    history.push('/')
}

export const deleteTodo = id => async (dispatch, getState) => {
    await axios.delete(`/api/todos/${id}`, tokenConfig(getState))
    dispatch({
        type: DELETE_TODO,
        payload: id
    })
    history.push('/')
}