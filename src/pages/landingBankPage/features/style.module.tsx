import React from 'react';
import styled from 'styled-components';
import ButtonUnstyled from '@mui/core/ButtonUnstyled';

const StyledFeaturesButton = styled(ButtonUnstyled)`
    && {
        padding: 10px;
        margin: 15px 0;
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
        outline: none;
        border: none;
    }

    &&:disabled {
        opacity: 30%;
    }
    
    &&:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    @media screen and (max-width: 550px) {
       display: block;
       margin-left: auto !important;
       margin-right: auto !important;
       margin-bottom: 30px !important;
    }
`

export const FeaturesButton = (props: {children: React.ReactNode}) => {
    return (
        <StyledFeaturesButton
            variant="contained"
        >
            {props.children}
        </StyledFeaturesButton>
    )
}

const StyledWhiteBlueButton = styled(ButtonUnstyled)`
    && {
        padding: 10px 20px;
        margin: 15px 0;
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
        outline: none;
        border: none;
    }

    &&:disabled {
        opacity: 30%;
    }
    
    &&:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    @media screen and (max-width: 550px) {
        background-color: ${(props) => props.theme.colors.darkBlue} !important;
        color: ${(props) => props.theme.colors.white} !important;
        margin-bottom: 30px !important;
    }
`

export const WhiteBlueButton = (props: {children: React.ReactNode}) => {
    return (
        <StyledWhiteBlueButton
            variant="contained"
        >
            {props.children}
        </StyledWhiteBlueButton>
    )
}

export const FeatureBlock = styled.div`
    border-radius: 4px;
    background: ${(props) => props.theme.colors.milkyGray};
    padding: 0 3%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 285px;
    
    > div {
        display: flex;
        flex-direction: column;
        align-items: left;
        height: 100%;
        padding: 1.5% 5% 1.5% 0;
        justify-content: space-between;
    }

    .feature-img {
        margin: 0;
    }

    .unique-feature-img {
        align-self: flex-end !important;
    }

    @media screen and (max-width: 550px) {
        flex-direction: column;
        height: fit-content;
        .unique-feature-img {
            align-self: center !important;
        }
        .feature-img {
            margin: 20px 0;
        }
    }
`