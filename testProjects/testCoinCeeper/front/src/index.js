import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"

import App from "./components/app"
import ErrorBoundary from "./components/error-boundary"
import CostsService from "./services/costs-service"
import {CostsServiceProvider} from "./components/costs-service-context"

import store from "./store"

const costsService = new CostsService()

const Main = () => {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <CostsServiceProvider value={costsService}>
                    <Router>
                        <App/>
                    </Router>
                </CostsServiceProvider>
            </ErrorBoundary>
        </Provider>
    )
}

ReactDOM.render(<Main/>, document.getElementById('root'))
