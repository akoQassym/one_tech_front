import React from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/core/SwitchUnstyled';

const StyledTextField = styled(TextField)`
    padding: 0;
`

export const StyledPasswordInput = (props: {
    label: string,
    error: boolean,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    helperText: string
}) => {
    return (
        <StyledTextField
            id="outlined-password-input"
            type="password"
            label={props.label}
            value={props.value}
            onChange={props.onChange}
            variant="outlined"
            error={props.error}
            helperText={props.helperText}
            margin="normal"
        />
    )
}

export const StyledSwitch = styled(SwitchUnstyled)`
    && {
        font-size: 0;
        position: relative;
        display: inline-block;
        width: 34px;
        height: 20px;
        margin: 0;
        cursor: pointer;
        &.${switchUnstyledClasses.disabled} {
            opacity: 0.4;
            cursor: not-allowed;
        }
        & .${switchUnstyledClasses.track} {
            background: #FFFFFF;
            border-radius: 10px;
            display: block;
            height: 100%;
            width: 100%;
            position: absolute;
        }
        & .${switchUnstyledClasses.thumb} {
            display: block;
            width: 14px;
            height: 14px;
            top: 3px;
            left: 3px;
            border-radius: 16px;
            background-color: #999999;
            position: relative;
            transition: all 200ms ease;
        }
        &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
            background-color: #FFFFFF;
            box-shadow: 0 0 1px 8px rgba(0,0,0,0.25);
        }
        &.${switchUnstyledClasses.checked} { 
            .${switchUnstyledClasses.thumb} {
            left: 14px;
            top: 3px;
            background-color: #FFF;
            }
            .${switchUnstyledClasses.track} {
            background: ${(props) => props.theme.colors.forteMain};
            }
        }
        & .${switchUnstyledClasses.input} {
            cursor: inherit;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0;
            z-index: 1;
            margin: 0;
        }
    }
`