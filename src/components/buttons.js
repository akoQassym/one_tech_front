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

const StyledBannerButton = styled(Button)`
    && {
        padding: 15px 25px;
        margin: 3rem 0 20px 0;
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.forteMain};
        width: 200px;
        border-radius: 4px;
        text-transform: none;
        transition: 0.3s all ease-out;
        font-size: ${(props) => props.theme.fontSizes.text2Size};
        font-weight: 500;
        font-family: 'Rubik', sans-serif;
    }

    &&:disabled {
        opacity: 30%;
    }
    
    &&:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color: ${(props) => props.theme.colors.white};
    }
`

const StyledBannerIndicator = styled.span`
    width: 50px;
    height: 5px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.white};

    & .selected {
        background-color: ${(props) => props.theme.colors.darkBlue} !important;
    }
    
    &&:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color: ${(props) => props.theme.colors.white};
    }
`

const StyledBuyCardButton = styled(Button)`
    && {
        padding: 10px 28px;
        margin: 15px 0 10px;
        width: 16px;
        background-color: ${(props) => props.theme.colors.darkBlue};
        color: ${(props) => props.theme.colors.white};
        width: 186px;
        border-radius: 4px;
        text-transform: none;
        font-size: ${(props) => props.theme.fontSizes.text2Size};
        font-weight: 500;
        font-family: 'Rubik', sans-serif;
        transition: 0.3s all ease-out;
    }
    
    &&:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color: ${(props) => props.theme.colors.darkBlue};
    }

    &&:disabled {
        opacity: 30%;
    }
`

const StyledCreditButton = styled(Button)`
    && {
        padding: 10px;
        margin: 15px 0 10px;
        width: 16px;
        background-color: ${(props) => props.theme.colors.darkBlue};
        color: ${(props) => props.theme.colors.white};
        width: 206px;
        border-radius: 4px;
        text-transform: none;
        font-size: ${(props) => props.theme.fontSizes.text2Size};
        font-weight: 500;
        font-family: 'Rubik', sans-serif;
        transition: 0.3s all ease-out;
    }

    &&:disabled {
        opacity: 30%;
    }
    
    &&:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color: ${(props) => props.theme.colors.darkBlue};
    }
`

const StyledWhiteBlueButton = styled(Button)`
    && {
        padding: 10px 20px;
        margin: 15px 0 10px;
        width: 16px;
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.anotherBlue};
        width: 153px;
        border-radius: 4px;
        text-transform: none;
        font-size: ${(props) => props.theme.fontSizes.text2Size};
        font-weight: 500;
        font-family: 'Rubik', sans-serif;
        transition: 0.3s all ease-out;
    }

    &&:disabled {
        opacity: 30%;
    }
    
    &&:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color: ${(props) => props.theme.colors.white};
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

export const BannerIndicator = () => {
    return (
        <StyledBannerIndicator />
    )
}

export const BuyCardButton =  ({ children }) => {
    return (
        <StyledBuyCardButton
            variant="contained"
        >{children}</StyledBuyCardButton>
    )
}

export const CreditButton =  ({ children }) => {
    return (
        <StyledCreditButton
            variant="contained"
        >{children}</StyledCreditButton>
    )
}

export const WhiteBlueButton =  ({ children }) => {
    return (
        <StyledWhiteBlueButton
            variant="contained"
        >{children}</StyledWhiteBlueButton>
    )
}