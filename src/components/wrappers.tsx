import React from 'react';
import styled from 'styled-components';

// Password Form Page
const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2% 0;
`

const StyledPassDescWrapper = styled.div`
    text-align: left;
`

const StyledPassAlertWrapper = styled.div`
    display: flex;
    padding: 1rem;
    border: 1px solid gray;
    border-radius: 14px;
    text-align: left;
    align-items: flex-start;
    justify-content: space-between;
    color: gray;
`

export const OuterPassWrapper = (props: {children: React.ReactNode}) => {
    return (
        <StyledWrapper>{props.children}</StyledWrapper>
    )
}

export const PassDescWrapper = (props: {children: React.ReactNode}) => {
    return (
        <StyledPassDescWrapper>{props.children}</StyledPassDescWrapper>
    )
}

export const PassAlertWrapper = (props: {children: React.ReactNode}) => {
    return (
        <StyledPassAlertWrapper>{props.children}</StyledPassAlertWrapper>
    )
}

// Landing page
const StyledLandingWrapper = styled.div`
    width: 100vw;
    font-size: ${(props) => props.theme.fontSizes.text2Size};
    & section {
        padding: 0 15%;
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;

        & section {
            padding: 4%;
        }
    }
`

export const LandingWrapper = (props: {children: React.ReactNode}) => {
    return (
        <StyledLandingWrapper>{props.children}</StyledLandingWrapper>
    )
}

const StyledSectionWrapper = styled.section`
    position: relative;

    & .section-title {
        font-size: ${(props) => props.theme.fontSizes.sectionTitle};
        font-weight: bold;
        text-align: left;
    }

    & .flex-div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
`

export const SectionWrapper = (props: {children: React.ReactNode}) => {
    return (
        <StyledSectionWrapper>{props.children}</StyledSectionWrapper>
    )
}