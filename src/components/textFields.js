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

const StyledCurrencyInput = styled.input`
    border: none;
    font-size: ${(props) => props.theme.fontSizes.cardName};
    padding: 8px 0;
    background-color: ${(props) => props.theme.colors.milkyGray};
    outline: none;
    font-family: 'Rubik', sans-serif;
`

export const CurrencyInput = ({disabled, convertationResult, onChange, value}) => {
    return (
        <StyledCurrencyInput onChange={onChange} value={value} disabled={disabled} convertationResult={convertationResult} type="number" min={0.1} required/>
    )
}