import React from 'react';
import styled from 'styled-components';
import ButtonUnstyled from '@mui/core/ButtonUnstyled';

const StyledCreditButton = styled(ButtonUnstyled)`
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
        && {
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 25px;
            margin-bottom: 5px;
        }
    }
`

export const CreditButton = (props: {children: React.ReactNode}) => {
    return (
        <StyledCreditButton
            variant="contained"
        >{props.children}</StyledCreditButton>
    )
}

const StyledCalculatorWrapper = styled.section`
    margin: 0 auto;
    & > p {
        margin-bottom: 0;
    }
`

const StyledCalculatorGrid = styled.div`
    background: ${(props) => props.theme.colors.milkyGray};
    border-radius: 4px;
    margin: 5% 0 3% 0;
    padding: 2.5% 3%;
    display: flex;
    align-items: flex-start;

    @media screen and (max-width: 550px) {
        flex-direction: column;
    }
`

export const CreditCalculatorLeft = styled.div`
    width: 80%;
    padding: 0;
    border-right: 1px solid ${(props) => props.theme.colors.lightGray};
    
    @media screen and (max-width: 550px) {
        padding: 5%;
        width: 90%;
        border-right: none !important;
        border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
    }
`

export const CreditLeftTitle = styled.p`
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.colors.textBlack};
    font-size: ${(props) => props.theme.fontSizes.text2Size};
`

export const CreditCalculatorRight = styled.div`
    padding: 3% 0 3% 3%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 35px;
    width: 30%;

    p {
        padding: 0;
        margin: 0;
    }

    @media screen and (max-width: 550px) {
        width: fit-content;
        padding: 3% !important;
        row-gap: 0;
    }
`

const StyledSliderWrapper = styled.div`
    display: flex;
    justify-content: baseline;
    align-items: center;
    padding-bottom: 3%;

    @media screen and (max-width: 550px) {
        width: 105%;
    }
`

const StyledSwitchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: baseline;
    margin-bottom: 15px;

    & p {
        margin: 0 0 0 10px;
        padding: 0;
        color: ${(props) => props.theme.colors.textBlack};
        font-size: ${(props) => props.theme.fontSizes.text2Size};
    }
`

export const SliderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 75%;
    margin-right: 15px;
    @media screen and (max-width: 550px) {
        width: 100%;
    }
`

export const SliderRange = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    span {
        margin: 0;
        font-size: ${(props) => props.theme.fontSizes.text0size};
        color: ${(props) => props.theme.colors.darkGray};
    }

    @media screen and (max-width: 550px) {
        width: 100%;
    }
`

export const SliderValue = styled.p`
    color: ${(props) => props.theme.colors.textBlack};
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSizes.cardName};
    margin: 3% 0;
    padding-bottom: 2%;
    @media screen and (max-width: 550px) {
        padding-bottom: 0 !important;
        font-size: ${(props) => props.theme.fontSizes.text3Size} !important;
    }
`

export const MobileCreditRightBlock = styled.div`
    width: 100%;
    display: flex;
    flex: 'row';
    justify-content: space-between !important;
    align-items: flex-end;
    margin-top: 15px;
`

export const MobileSwitchBlock= styled.div`
    margin-top: 25px;
`

export const CreditRightBlockTitle = styled.p`
    font-size: ${(props) => props.theme.fontSizes.text1Size};
    font-weight: 400;
    @media screen and (max-width: 550px) {
        margin-bottom: 4px !important;
    }
`

export const CreditMonthlyValue = styled.p`
    font-size: ${(props) => props.theme.fontSizes.sectionTitle};
    color: ${(props) => props.theme.colors.forteMain};
    font-weight: 500;
    padding-top: 7% !important;
    @media screen and (max-width: 550px) {
        padding-top: 0 !important;
        font-size: ${(props) => props.theme.fontSizes.cardName};
    }
`

export const CreditRateValue = styled.p`
    font-size: ${(props) => props.theme.fontSizes.cardName};
    color: ${(props) => props.theme.colors.textBlack};
    font-weight: 400;
    padding-top: 7% !important;
    @media screen and (max-width: 550px) {
        padding-top: 0 !important;
        font-size: ${(props) => props.theme.fontSizes.cardName};
    }
`

export const CreditCalculatorWrapper = (props: {children: React.ReactNode}) => {
    return (
        <StyledCalculatorWrapper>{props.children}</StyledCalculatorWrapper>
    )
}

export const CreditCalculatorGrid = (props: {children: React.ReactNode}) => {
    return (
        <StyledCalculatorGrid>{props.children}</StyledCalculatorGrid>
    )
}

export const SliderWrapper = (props: {children: React.ReactNode}) => {
    return (
        <StyledSliderWrapper>{props.children}</StyledSliderWrapper>
    )
}

export const SwitchWrapper = (props: {children: React.ReactNode}) => {
    return (
        <StyledSwitchWrapper>{props.children}</StyledSwitchWrapper>
    )
}