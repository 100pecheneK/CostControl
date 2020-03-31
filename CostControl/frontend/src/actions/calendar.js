import {CHANGE_DATE, INITIALIZE_DATE} from './types'
import {formatDate} from "../components/pages/home-page/body/calendar/utils"

export const changeDate = (date, dateToServer) => dispatch => {
    dispatch({
        type: CHANGE_DATE,
        date: date,
        dateToServer: dateToServer
    })
}

export const initializeDate = () => dispatch =>{
    const date = new Date()
    const dateToServer = formatDate(date, 'day')
    dispatch({
        type: INITIALIZE_DATE,
        date,
        dateToServer
    })
}