import React from 'react';
import styled from 'styled-components';
import ButtonUnstyled from '@mui/core/ButtonUnstyled';

export const CalculatorTitle = styled.p`
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.cardName} !important;
    color: ${(props) => props.theme.colors.darkBlue};
    font-weight: 500;
    margin-bottom: 20px;
    margin-top: 5%;
`

export const SliderBlock = styled.div`
    width: 100%;
`

export const SliderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 5%;
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

export const CalculationResultsBlock = styled.div`
    width: 60%;
`

export const CalculationResultDiv = styled.div`
    width: 100%;
    margin-bottom: 2%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    & > .resultTitle {
        width: 60%;
        font-size: ${(props) => props.theme.fontSizes.text1Size};
        margin: 0;
        padding: 0 0 4px 0;
    }

    & > .resultValue {
        width: 40%;
        text-align: left;
        font-weight: 500;
        font-size: ${(props) => props.theme.fontSizes.cardName};
        color: ${(props) => props.theme.colors.darkBlue};
        margin: 0;
    }
`

export const SwitchWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 15px;
    background-color: ${(props) => props.theme.colors.lightGray};
    border-radius: 4px;
    padding: 15px 5px 15px 15px;

    & p {
        margin: 0 0 0 10px;
        padding: 0;
        color: ${(props) => props.theme.colors.textBlack};
        font-size: ${(props) => props.theme.fontSizes.text2Size};
    }
`

export const SwitchValue = styled.div`
    width: 190px;
    padding: 5px 8px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 4px;
    border: 1px solid #BDBDBD;

    & > p {
        font-size: ${(props) => props.theme.fontSizes.cardName};
        font-weight: 400;
        margin: 0;
        text-align: right;
    }
`

export const PeriodBlock = styled.button`
    width: 75px;
    font-size: ${(props) => props.theme.fontSizes.text3Size};
    background-color: ${(props) => props.theme.colors.forteMain};
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    border-radius: 4px;
    padding: 10px 0;
    opacity: 60%;
    border: none;
    cursor: pointer;
    outline: none;
    font-family: ${(props) => props.theme.fontFamily.main};
    transition: 0.25s all ease;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`

export const AdditionalInfo = styled.p`
    font-size: ${(props) => props.theme.fontSizes.text0size};
    color: ${(props) => props.theme.colors.darkGray};
    text-align: left;
`

export const FormWrapper = styled.div`
    padding: 1% 7%;
    width: 86%;
`

export const StyledFormButton = styled(ButtonUnstyled)`
    && {
        padding: 15px 25px;
        margin: 3% 0 1% 0;
        background-color: ${(props) => props.theme.colors.forteMain};
        color: ${(props) => props.theme.colors.white};
        width: 200px;
        border-radius: 4px;
        text-transform: none;
        transition: 0.3s all ease-out;
        font-size: ${(props) => props.theme.fontSizes.text2Size};
        font-weight: 500;
        font-family: 'Rubik', sans-serif;
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
        width: 156px !important;
        background-color: ${(props) => props.theme.colors.forteMain} !important;
        color: ${(props) => props.theme.colors.darkBlue} !important;
    }
`

export const FormButton = (props: {children: string}): JSX.Element => {
    return (
        <StyledFormButton 
            variant="contained"
        >
            {props.children}
        </StyledFormButton>
    )
}