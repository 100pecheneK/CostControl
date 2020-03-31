import {CHANGE_DATE} from './types'

export const changeDate = (date, dateToServer) => dispatch => {
    dispatch({
        type: CHANGE_DATE,
        date: date,
        dateToServer: dateToServer
    })
}
