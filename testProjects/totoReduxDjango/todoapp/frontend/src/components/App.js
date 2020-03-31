import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Header from './layout/header';
import Dashboard from './todos/dashboard';
import TodoDelete from './todos/todo-delete';
import TodoEdit from './todos/todo-edit';
import { Provider } from 'react-redux';
import store from '../store';
import LoginForm from "./auth/LoginForm"
import PrivateRoute from "./common/private-route"
import { loadUser } from "../actions/auth"
import HomePage from "./pages/home-page"
import '../static/Semantic-UI-CSS-master/semantic.css'
import RegisterForm from './auth/RegisterForm';

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser())
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Header />
                    <Switch>
                        <PrivateRoute exact path='/' component={HomePage} />
                        <Route exact path='/delete/:id' component={TodoDelete} />
                        <Route exact path='/edit/:id' component={TodoEdit} />
                        <Route exact path='/register' component={RegisterForm} />
                        <Route exact path='/login' component={LoginForm} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));
