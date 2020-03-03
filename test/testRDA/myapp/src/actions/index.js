import {
    FETCH_COSTS_SUCCESS,
    FETCH_COSTS_REQUEST,
    FETCH_COSTS_FAILURE,

    COST_ADDED_TO_LIST,
    COST_REMOVED_FROM_LIST,

    FETCH_BALANCE_SUCCESS,
    FETCH_BALANCE_REQUEST,
    FETCH_BALANCE_FAILURE,

    FETCH_COST_SUM_SUCCESS,
    FETCH_COST_SUM_REQUEST,
    FETCH_COST_SUM_FAILURE,

    FETCH_REPORT_SUCCESS,
    FETCH_REPORT_REQUEST,
    FETCH_REPORT_FAILURE,
} from '../action-types'

const costsRequested = () => {
    return {
        type: FETCH_COSTS_SUCCESS
    }
}

const costsLoaded = (newCosts) => {
    return {
        type: FETCH_COSTS_REQUEST,
        payload: newCosts
    }
}

const costsError = (error) => {
    return {
        type: FETCH_COSTS_FAILURE,
        payload: error
    }
}

const balanceRequested = () => {
    return {
        type: FETCH_BALANCE_SUCCESS
    }
}

const balanceLoaded = (newCosts) => {
    return {
        type: FETCH_BALANCE_REQUEST,
        payload: newCosts
    }
}

const balanceError = (error) => {
    return {
        type: FETCH_BALANCE_FAILURE,
        payload: error
    }
}

const costSumRequested = () => {
    return {
        type: FETCH_COST_SUM_SUCCESS
    }
}

const costSumLoaded = (newCostSum) => {
    return {
        type: FETCH_COST_SUM_REQUEST,
        payload: newCostSum
    }
}

const costSumError = (error) => {
    return {
        type: FETCH_COST_SUM_FAILURE,
        payload: error
    }
}

const reportRequested = () => {
    return {
        type: FETCH_REPORT_SUCCESS
    }
}

const reportLoaded = (newReport) => {
    return {
        type: FETCH_REPORT_REQUEST,
        payload: newReport
    }
}

const reportError = (error) => {
    return {
        type: FETCH_REPORT_FAILURE,
        payload: error
    }
}

const costAddedToCart = (cost) => {
    return {
        type: COST_ADDED_TO_LIST,
        payload: cost
    }
}

const costRemovedFromCart = (costId) => {
    return {
        type: COST_REMOVED_FROM_LIST,
        payload: costId
    }
}

const fetchCosts = (costsStoreService) => () => (dispatch) => {
    dispatch(costsRequested())
    costsStoreService.getCosts()
        .then((data) => dispatch(costsLoaded(data)))
        .catch((err) => dispatch(costsError(err)))
}

const fetchCostSum = (costSumStoreService) => () => (dispatch) => {
    dispatch(costSumRequested())
    costSumStoreService.getCostSum()
        .then((data) => dispatch(costSumLoaded(data)))
        .catch((err) => dispatch(costSumError(err)))
}

const fetchBalance = (balanceStoreService) => () => (dispatch) => {
    dispatch(balanceRequested())
    balanceStoreService.getBalance()
        .then((data) => dispatch(balanceLoaded(data)))
        .catch((err) => dispatch(balanceError(err)))
}

const fetchReport = (reportStoreService) => () => (dispatch) => {
    dispatch(reportRequested())
    reportStoreService.getReport()
        .then((data) => dispatch(reportLoaded(data)))
        .catch((err) => dispatch(reportError(err)))
}

export {
    costsRequested,
    costsLoaded,
    costsError,

    balanceRequested,
    balanceLoaded,
    balanceError,

    costSumRequested,
    costSumLoaded,
    costSumError,

    reportRequested,
    reportLoaded,
    reportError,

    costAddedToCart,
    costRemovedFromCart,

    fetchCosts,
    fetchCostSum,
    fetchBalance,
    fetchReport,
}