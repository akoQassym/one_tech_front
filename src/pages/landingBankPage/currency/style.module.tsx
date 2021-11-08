import React from 'react';
import { styled as materialStyled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import styled, { keyframes } from 'styled-components';
import {theme} from '../../../utils/theme';

export const StyledTableCell = materialStyled(TableCell)(({}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.colors.white,
        color: theme.colors.textBlack,
        fontFamily: theme.fontFamily.main
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: theme.fontSizes.tableFont,
        fontFamily: theme.fontFamily.main
    },
}));

export const StyledTableRow = materialStyled(TableRow)(({}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.colors.milkyGray,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const rotate_animation = keyframes`
    0% {transform: rotate(360deg);}
    100% {transform: rotate(0deg);}
`

const StyledConverterWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.milkyGray};
    border-radius: 4px;
    padding: 1% 4% 2% 6%;
    margin: 0 0 3% 0;
    position: relative;

    & td {
        border-bottom: 1px solid ${(props) => props.theme.colors.darkGray} !important; 
    }

    .cur-btn {
        width: 15%;
        padding: 0 6px;
        cursor: pointer;
    }

    .cur-btn img {
        opacity: 0.5;
    }

    & .selected {
        opacity: 1 !important;
    }

    > img {
        position: absolute;
        left: -40px;
        top: 35%;
        cursor: pointer;
        transition: 0.3s all ease-in-out;
        border-radius: 50px;
    }

    > img:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    @media screen and (max-width: 550px) {
        padding: 1% 2% 6% 13% !important;
        margin-top: 3% !important;
        width: 70%;

        >img {
            left: -20px !important;
            top: 45%;
        }

        .cur-btn {
            border: none !important;
            padding: 7px 10px !important;
        }
    }
`
export const ConverterWrapper = (props: {children: React.ReactNode}) => {
    return (
        <StyledConverterWrapper>{props.children}</StyledConverterWrapper>
    )
}

const StyledCurrencyInput = styled.input`
    border: none;
    font-size: ${(props) => props.theme.fontSizes.cardName};
    padding: 8px 0;
    background-color: ${(props) => props.theme.colors.milkyGray};
    outline: none;
    font-family: 'Rubik', sans-serif;

    @media screen and (max-width: 550px) {
        padding: 3px 0;
        font-size: ${(props) => props.theme.fontSizes.text3Size};
    }
`

export const CurrencyInput = (
    props: {
        disabled?: boolean, 
        onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
        value?: number | undefined
    }
) => {
    return (
        <StyledCurrencyInput onChange={props.onChange} value={props.value} disabled={props.disabled} type="number" min={0.1} required/>
    )
}

const StyledConverterTitle = styled.p`
    text-align: left;
    font-size: ${(props) => props.theme.fontSizes.cardName} !important;
    color: ${(props) => props.theme.colors.darkBlue};
    font-weight: 500;
    margin-bottom: 10px;
    @media screen and (max-width: 550px) {
        font-size: ${(props) => props.theme.fontSizes.text3Size} !important;
    }
`

export const ConverterTitle = (props: {children: React.ReactNode}) => {
    return <StyledConverterTitle>{props.children}</StyledConverterTitle>
}
