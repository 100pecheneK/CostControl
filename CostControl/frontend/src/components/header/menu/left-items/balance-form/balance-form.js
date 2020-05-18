import React, { Component } from 'react'
import { Field, reduxForm } from "redux-form"

class BalanceForm extends Component {

    onKeyPress = (e) => {
        if (e.key.match(/[^0-9]/ig)) {
            e.preventDefault()
        }
    }
    renderField = ({ input, label, type, meta: { touched, error } }) => {
        return (
            <div className={`field ${touched && error ? 'error' : ''}`}>
                <label>{label}</label>
                <input {...input} autoComplete='off' type={type} onKeyPress={e => this.onKeyPress(e)} />
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
                <Field name='balance' component={this.renderField} label='Доход' type="number" />
                <button className='ui primary button'>Добавить</button>
            </form>
        )
    }

}

const validate = formValues => {
    const errors = {}
    try {
        if (formValues.balance.match(/[^0-9]/ig)) {
            errors.balance = 'Толкьо целые числа'
        }
    } catch (e) { }
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

