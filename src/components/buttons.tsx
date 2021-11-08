import React from 'react';
import styled from 'styled-components';
import { Button } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material"

const StyledPassButton = styled(Button)`
    && {
        padding: 12px;
        background-color: deeppink;
        margin-top: 2rem;
        width: 250px;
        border-radius: 10px;
        text-transform: none;
        display: block;
        margin-left: auto;
        margin-right: auto;
        transition: 0.3s all ease-out;
    }

    &&:disabled {
        color: white;
    }

    &&:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color: deeppink;
    }
`

export const PassSubmitButton = (props: {children: React.ReactNode, disabled: boolean}) => {
    return (
        <StyledPassButton
            variant="contained"
            disabled={props.disabled}
        >{props.children}</StyledPassButton>
    )
}

const StyledVisuallyImpairedButton = styled(Button)`
    && {
        padding: 9px 17px;
        background-color: ${(props) => props.theme.colors.textBlack};
        color: ${(props) => props.theme.colors.white};
        font-weight: 500;
        font-family: 'Rubik', sans-serif;
        font-size: 16px;
        text-transform: none;
        text-align: right;
        border-radius: 4px;
        transition: 0.3s all ease-out;
    }

    &&:disabled {
        opacity: 30%;
    }
    
    &&:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color: ${(props) => props.theme.colors.textBlack};
    }

    @media screen and (min-width: 550px) {
        letter-spacing: 0.1rem;
    }
`

export const VisuallyImpairedButton = (props: {children: React.ReactNode, endIcon: React.ReactNode}) => {
    return (
        <StyledVisuallyImpairedButton variant="contained" endIcon={props.endIcon}>
            {props.children}
        </StyledVisuallyImpairedButton>
    )
}