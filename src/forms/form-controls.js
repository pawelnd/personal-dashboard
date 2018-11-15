import {RadioGroup, TextField} from '@material-ui/core';
import React from 'react';

export const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField
        error={!!error && touched}
        helperText={touched && error}
        {...input}
        {...custom}
    />
)
