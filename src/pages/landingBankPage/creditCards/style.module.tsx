import React from 'react';
import styled from 'styled-components';
import ButtonUnstyled from '@mui/core/ButtonUnstyled';

const StyledCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 310px;

    & .card-name {
        font-size: ${(props) => props.theme.fontSizes.cardName};
        font-weight: bold;
    }

    & p {
        margin: 10px 0;
    }
`

export const CardWrapper = (props: {children: React.ReactNode, key?: number | string}) => {
    return (
        <StyledCardWrapper key={props.key}>{props.children}</StyledCardWrapper>
    )
}

const StyledCardImgWrapper = styled.img`
    width: 288px;
    height: 179px;
    border-radius: 5px;
    margin: 5px 0 15px 0;
    box-shadow: -4px 8px 24px 0px #0000003D;
`

export const CardImgWrapper = (props: {src: string, alt?: string}) => {
    return (
        <StyledCardImgWrapper src={props.src} alt={props.alt}></StyledCardImgWrapper>
    )
}

const StyledBuyCardButton = styled(ButtonUnstyled)`
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
        outline: none;
        border: none;
    }
    
    &&:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    &&:disabled {
        opacity: 30%;
    }
`

export const BuyCardButton = (props: {children: React.ReactNode}) => {
    return (
        <StyledBuyCardButton
            variant="contained"
        >{props.children}</StyledBuyCardButton>
    )
}