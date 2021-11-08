import styled, { keyframes } from 'styled-components';
import React from 'react';

const WiggleAnimation = keyframes`
    0% { transform: rotate(0deg); }
   80% { transform: rotate(0deg); }
   85% { transform: rotate(4deg); }
   95% { transform: rotate(-4deg); }
  100% { transform: rotate(0deg); }
`

const StyledMobileBannerWrapper = styled.section`
    margin: 9% 0;
    background-color: ${(props) => props.theme.colors.milkyGray};
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    @media screen and (max-width: 550px) {
        margin: 4% 0;
        padding: 4% 5%; 
        width: fit-content;
        flex-direction: column;
        align-items: center;
    }
`

export const MobileBannerImage = styled.img`
    animation: ${WiggleAnimation} 6s infinite;
    width: 176px;
    margin: 15px 0;

    @media screen and (min-width: 550px) {
        position: absolute;
        right: 24%;
        width: 250px;
    }
`

export const MobileBannerWrapper = (props: {children: React.ReactNode}) => {
    return (
        <StyledMobileBannerWrapper>{props.children}</StyledMobileBannerWrapper>
    )
}

export const MobileBannerContent = styled.div`
    width: 60%;
    text-align: left;
    ul {
        padding-left: 5%;
    }
    li {
        margin: 1.3rem 0;
    }
    @media screen and (max-width: 550px) {
        width: 100%;
    }
`

const StyledDownloadLink = styled.a`
    margin: 10px 0;
    > img {
        transition: 0.3s all ease-out;
        border-radius: 8px;
        flex: 1 1 auto;
    }
    > img:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    @media screen and (max-width: 330px) {
        > img {
            width: 130px !important;
        }
    }
`

export const DownloadLink = (props: {children: React.ReactNode, href?: string}) => {
    return (
        <StyledDownloadLink
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.children}
        </StyledDownloadLink>
    )
}