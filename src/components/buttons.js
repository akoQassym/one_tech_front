import React from 'react';
import styled from 'styled-components';
import { Button } from "@mui/material";

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
    }
    &&:disabled{
        color: white;
    }
`

const StyledBannerButton = styled(Button)`
    && {
        padding: 15px 25px;
        margin: 3rem 0 20px 0;
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.forteMain};
        width: 200px;
        border-radius: 4px;
        text-transform: none;
        font-size: ${(props) => props.theme.fontSizes.text2Size};
        font-weight: bold;
    }
    &&:disabled{
        opacity: 30%;
    }
`

const StyledBuyCardButton = styled(Button)`
    && {
        padding: 10px 32px;
        margin: 15px 0 10px;
        width: 16px;
        background-color: ${(props) => props.theme.colors.darkBlue};
        color: white;
        width: 200px;
        border-radius: 4px;
        text-transform: none;
        font-size: ${(props) => props.theme.fontSizes.text2Size};
        font-weight: bold;
    }
    &&:disabled{
        opacity: 30%;
    }
`

export const PassSubmitButton = ({ children }) => {
    return (
        <StyledPassButton
            variant="contained"
        >{children}</StyledPassButton>
    )
}

export const BannerButton = ({ children }) => {
    return (
        <StyledBannerButton 
            variant="contained"
        >{children}</StyledBannerButton>
    )
}

export const BuyCardButton =  ({ children }) => {
    return (
        <StyledBuyCardButton
            variant="contained"
        >{children}</StyledBuyCardButton>
    )
}
