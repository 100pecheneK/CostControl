import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom'
import history from '../history'
import {Provider} from 'react-redux'
import store from "../store"
import Header from "./header"
import CostCreate from './pages/home-page/body/cost/cost-create'
import {loadUser} from "../actions/auth"
import LoginForm from "./auth/LoginForm"
import Cost from "./pages/home-page/body/cost"
import Report from "./pages/home-page/body/report"
import PrivateRoute from "./common/private-route"
import RegisterForm from "./auth/RegisterForm"


class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser())
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Header/>
                    <Switch>
                        <PrivateRoute exact path='/' component={Cost}/>
                        <Route exact path='/create' component={CostCreate}/>
                        <Route exact path='/report' component={Report}/>
                        <Route exact path='/login' component={LoginForm}/>
                        <Route exact path='/register' component={RegisterForm}/>
                    </Switch>
                </Router>

            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));
