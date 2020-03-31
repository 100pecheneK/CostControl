import React, {Component} from "react"
import TodoList from "./todo-list"
import TodoCreate from "./todo-create"

class Dashboard extends Component {
    render() {
        return (
            <div className="ui container">
                <TodoCreate/>
                <TodoList/>
            </div>
        )
    }
}

export default Dashboard