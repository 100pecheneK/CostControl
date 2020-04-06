import React, {Component} from 'react'
import {Field, reduxForm} from "redux-form"
import {connect} from "react-redux"
import {getCategories} from "../../../../../../actions/categories"


class CostForm extends Component {
    componentDidMount() {
        this.props.getCategories()
    }

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


    renderOptions = ({input, label, meta: {touched, error}}) => {
        return (
            <div className={`field ${touched && error ? 'error' : ''}`}>
                <label>{label}</label>
                <select {...input}>
                    <option/>
                    {this.props.categories.map(({id, category}) => (
                        <option value={id} key={id}>
                            {category}
                        </option>
                    ))}
                </select>
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
                <Field name='cost' component={this.renderField} label='Сумма'/>
                <Field name="category_id" component={this.renderOptions} label='Категория'/>
                <button className='ui primary button'>Добавить</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {}
    if (!formValues.cost) {
        errors.cost = 'Пожалуйста, укажите сумму'
    }
    if (!formValues.category_id) {
        errors.category_id = 'Пожалуйста, выберите категорию'
    }
    return errors
}

const mapStateToProps = state => {
    return {
        categories: Object.values(state.categories)
    }
}

CostForm = reduxForm({
    form: 'costForm',
    touchOnBlur: false,
    validate
})(CostForm)

export default connect(
    mapStateToProps,
    {getCategories}
)(CostForm)