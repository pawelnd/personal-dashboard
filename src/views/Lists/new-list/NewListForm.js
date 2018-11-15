import { Field, reduxForm } from 'redux-form';
import React from 'react';
import { Button } from '@material-ui/core';
import { renderTextField } from '../../../forms/form-controls';

const validate = values => {
    const errors = {};
    Object.keys(values).forEach(field => {
        if (!values[field] || values[field]=='') {
            errors[field] = 'Required'
        }
    });
    return errors
}

const required = value => (value ? undefined : 'Required')

let NewListForm = props => {
    const { handleSubmit , pristine, submitting, cancel} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="name"
                    component={renderTextField}
                    label="Name"
                    validate={[required]}
                />
            </div>
            <div>
                <Button type="submit" disabled={pristine || submitting}>
                    Create
                </Button>
                <Button onClick={cancel} disabled={submitting} >
                    Cancel
                </Button>
            </div>
        </form>
    )
}

NewListForm = reduxForm({
    form: 'newListForm',
    validate
})(NewListForm)

export default NewListForm
