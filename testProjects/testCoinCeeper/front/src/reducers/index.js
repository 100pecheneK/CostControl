import updateCostsList from "./costs-list"
import updateCostSum from "./costSum"
import updateBalance from "./balance"
import updateReport from "./report"
import updateLogin from "./auth"


const reducer = (state, action) => {
    return {
        updateCostList: updateCostsList(state, action),
        // updateCostSum: updateCostSum(state, action),
        // updateBalance: updateBalance(state, action),
        // updateReport: updateReport(state, action),
        // updateLogin: updateLogin(state, action),
    }
}

export default reducer