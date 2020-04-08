import React, {Component} from 'react'
import {Field, reduxForm} from "redux-form"

class BalanceForm extends Component {
    renderField = ({input, label, meta: {touched, error}}) => {
        return (
            <div className={`field ${touched && error ? 'error' : ''}`}>
                <label>{label}</label>
                <input {...input} autoComplete='off'/>
                {touched && error && (
                    <span className='ui pointing red basic label'>{error}</span>
                )}
            </div>
        )
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className='ui form error'>
                <Field name='balance' component={this.renderField} label='Доход'/>
                <button className='ui primary button'>Добавить</button>
            </form>
        )
    }

}

const validate = formValues => {
    const errors = {}
    if (!formValues.balance) {
        errors.balance = 'Пожалуйста, укажите доход'
    }
    return errors
}


export default reduxForm({
    form: 'addBalance',
    touchOnBlur: false,
    validate
})(BalanceForm)

