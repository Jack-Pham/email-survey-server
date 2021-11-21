import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    state = {
        formReview: false
    }
    render() {
        const { formReview } = this.state;
        return (
            <div>
                {formReview ? 
                    <SurveyFormReview onCancel={() => this.setState({ formReview : false })} /> :
                    <SurveyForm onSurveySubmit={() => this.setState({ formReview: true })}/>}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);