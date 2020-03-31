import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Modal from "../layout/modal"
import history from "../../history"
import {getTodo, deleteTodo} from "../../actions/todos"

class TodoDelete extends Component {
    componentDidMount() {
        this.props.getTodo(this.props.match.params.id)
    }
    renderContent(){
        const msg = 'Are you sure want to delete this task'
        if (!this.props.todo){
            return `${msg}?`
        }
        return `${msg}: ${this.props.todo.task}`
    }
    renderActions(){
        const {id} = this.props.match.params
        return (
            <Fragment>
                <button onClick={()=>this.props.deleteTodo(id)}
                className='ui negative button'>
                    Delete
                </button>
                <Link to='/' className='ui button'>
                    Cancel
                </Link>
            </Fragment>
        )
    }
    render() {
        return (
            <Modal title='Delete Todo'
            content={this.renderContent()}
            actions={this.renderActions()}
            onDismiss={()=>history.push('/')}/>
        )
    }
}
const mapStateToProps = (state, ownProps)=>{
    return ({
        todo: state.todos[ownProps.match.params.id]
    })
}
export default connect(
    mapStateToProps,
    {getTodo, deleteTodo}
)(TodoDelete)