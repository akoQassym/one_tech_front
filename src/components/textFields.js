import React from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';

const StyledTextField = styled(TextField)`
    padding: 0;
`

export const StyledPasswordInput = ({
    label,
    error,
    value,
    onChange,
    helperText
}) => {
    return (
        <StyledTextField
            id="outlined-password-input"
            type="password"
            label={label}
            value={value}
            onChange={onChange}
            variant="outlined"
            error={error}
            helperText={helperText}
            margin="normal"
        />
    )
}