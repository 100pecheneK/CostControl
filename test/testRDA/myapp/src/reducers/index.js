import updateCostsList from "./costs-list"
import updateCostSum from "./costSum"
import updateBalance from "./balance"
import updateReport from "./report"


const reducer = (state, action) => {
    return {
        updateCostList: updateCostsList(state, action),
        updateCostSum: updateCostSum(state, action),
        updateBalance: updateBalance(state, action),
        updateReport: updateReport(state, action),
    }
}

export default reducer