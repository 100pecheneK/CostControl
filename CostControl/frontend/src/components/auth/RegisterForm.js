import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {register} from '../../actions/auth'

class RegisterForm extends Component {
    renderField = ({input, label, type, meta: {touched, error}}) => {
        const ucFirst = str => str[0].toUpperCase() + str.slice(1)

        return (

            <div className={`field ${touched && error ? 'error' : ''}`}>
                <label>{label}</label>
                <input {...input} type={type}/>
                {touched && error && (
                    <span className='ui pointing red basic label'>{ucFirst(error.toString())}</span>
                )}
            </div>
        )
    }

    onSubmit = formValues => {
        this.props.register(formValues)
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/'/>;
        }
        return (
            <div className="ui container">
                <div className="ui segment">
                    <form
                        onSubmit={this.props.handleSubmit(this.onSubmit)}
                        className='ui form'>
                        <Field
                            name='email'
                            type='email'
                            component={this.renderField}
                            label='Email'
                            validate={[required]}/>
                        <Field
                            name='username'
                            type='text'
                            component={this.renderField}
                            label='Имя пользователя'
                            validate={[required, minLength3, maxLength15]}/>

                        <Field
                            name='password'
                            type='password'
                            component={this.renderField}
                            label='Пароль'
                            validate={[required]}/>
                        <Field
                            name='password2'
                            type='password'
                            component={this.renderField}
                            label='Подтверждение пароля'
                            validate={[required, passwordsMatch]}/>
                        <button className='ui primary button'>Зарегистрироваться</button>
                    </form>
                    <p style={{marginTop: '1rem'}}>
                        Уже есть аккаунт? <Link to='/login'>Войти</Link>

                    </p>
                </div>
            </div>
        )
    }
}

const required = value => (value ? undefined : 'Обязательно')

const minLength = min => value => value && value.length < min ? `Должено быть больше ${min} символов` : undefined
const minLength3 = minLength(3)

const maxLength = max => value => value && value.length > max ? `Должно быть меньше чем ${max}` : undefined
const maxLength15 = maxLength(15)

const passwordsMatch = (value, allValues) => value !== allValues.password ? 'Пароли не совпадают' : undefined

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

RegisterForm = connect(
    mapStateToProps,
    {register}
)(RegisterForm)

export default reduxForm({
    form: 'registerForm'
})(RegisterForm)