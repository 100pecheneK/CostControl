import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom'
import history from '../history'
import {Provider} from 'react-redux'
import store from "../store"
import Header from "./header"
import CostCreate from './pages/home-page/body/cost/cost-create'
import Body from "./pages/home-page/body"


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Header/>
                    <Body/>
                    <Switch>

                        <Route exact path='/create' component={CostCreate}/>
                        {/* <Route exact path='/report' component={Report} /> */}
                    </Switch>
                </Router>

            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));
