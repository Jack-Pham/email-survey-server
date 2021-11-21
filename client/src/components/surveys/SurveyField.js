import React from 'react';

const SurveyField = ({ input, label, meta: { touched, error } }) => {

    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: "5px" }}/>
            { touched && error && <div className="red-text" style={{ marginBottom: "20px" }}>{error}</div>}
        </div>
    );
};

export default SurveyField;