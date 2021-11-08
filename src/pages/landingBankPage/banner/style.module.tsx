import React from 'react';
import styled from 'styled-components';
import ButtonUnstyled from '@mui/core/ButtonUnstyled';

const StyledBannerWrapper = styled.section`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2% 0;
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.gradientColor2};
    background: radial-gradient(circle, rgba(1,181,198,1) 0%, rgba(4,105,133,1) 150%);
`

export const BannerWrapper = (props: {children: React.ReactNode, key?: number | string}) => {
    return <StyledBannerWrapper key={props.key}>{props.children}</StyledBannerWrapper>
}

export const TextBlock = styled.div`
    padding: 2% 0 6% 0;
`

export const PageName = styled.div`
    font-size: ${(props) => props.theme.fontSizes.text0size};

    @media screen and (max-width: 550px) {
        display: none;
    }
`

export const BannerTitle = styled.p`
    font-weight: 500;
    font-size: ${(props) => props.theme.fontSizes.sectionTitleHuge};    

    @media screen and (max-width: 550px) {
        font-size: ${(props) => props.theme.fontSizes.cardName};   
    }
`

export const BannerDescription = styled.p`
    font-size: ${(props) => props.theme.fontSizes.text3Size};

    @media screen and (max-width: 550px) {
        font-size: ${(props) => props.theme.fontSizes.text2Size};   
    }
`

export const StyledBannerImage = styled.img`
    max-height: 395px;

    @media screen and (max-width: 550px) {
        height: 125px;
    }
`
export const BannerImage = (props: {src: string}): JSX.Element => {
    return <StyledBannerImage src={props.src}/>
}

export const StyledBannerButton = styled(ButtonUnstyled)`
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
        color: ${(props) => props.theme.colors.white} !important;
    }
`

export const BannerButton = (props: {children: string}): JSX.Element => {
    return (
        <StyledBannerButton 
            variant="contained"
        >
            {props.children}
        </StyledBannerButton>
    )
}