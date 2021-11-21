import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import { validateEmails } from '../../utils/validateEmail';
import { FIELDS } from './formFields';

class SurveyForm extends Component {
    renderFields() {
       return FIELDS.map(({ label, name }, index) => {
           return <Field key={index} component={SurveyField} type="text" label={label} name={name} />
       });
    }

    render() {
        const { handleSubmit, onSurveySubmit } = this.props;
        return (
            <div className="container">
                <form onSubmit={handleSubmit(() => onSurveySubmit())}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
                    <button className="blue btn-flat right white-text" type="submit">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

const validate = function(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    FIELDS.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = `${name[0].toUpperCase() + name.slice(1)} is required!`;
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
