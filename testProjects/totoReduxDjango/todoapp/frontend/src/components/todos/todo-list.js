import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteTodo, getTodos} from "../../actions/todos"
import {Link} from "react-router-dom"

class TodoList extends Component {
    componentDidMount() {
        this.props.getTodos()
    }

    render() {
        const todos = this.props.todos
        return (
            <div className="ui relaxed divided list" style={{marginTop: '2rem'}}>
                {todos.map(todo => (
                    <div className="item" key={todo.id}>
                        <div className='right floated content'>
                            <Link
                                to={`/delete/${todo.id}`}
                                className='small ui negative basic button'>
                                Delete
                            </Link>
                        </div>
                        <i className="large calendar outline middle aligned icon"/>
                        <div className="content">
                            <Link to={`/edit/${todo.id}`} className="header">{todo.task}</Link>
                            <div className="description">{todo.created_at}</div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: Object.values(state.todos)
})
export default connect(
    mapStateToProps,
    {getTodos, deleteTodo}
)(TodoList)