import React from 'react';
import styled from 'styled-components';

// Password Page
const StyledTitlePassword = styled.h1`
    text-align: center;
    color: black;
    margin: 10px 0;
`

const StyledSubtitlePassword = styled.h3`
    text-align: center;
    color: gray;
    margin: 10px 0;
`

export const TitlePassword = (props: {children: React.ReactNode}) => {
    return <StyledTitlePassword>{props.children}</StyledTitlePassword>
}

export const SubtitlePassword = (props: {children: React.ReactNode}) => {
    return <StyledSubtitlePassword>{props.children}</StyledSubtitlePassword>
}

// Landing Page
const StyledSectionTitle = styled.p`
    font-size: ${(props) => props.theme.fontSizes.sectionTitle};
    font-weight: 500;
    color: ${(props) => props.theme.colors.darkBlue};
    text-align: left;
    margin-top: 3rem;

    @media screen and (max-width: 550px) {
        font-size: ${(props) => props.theme.fontSizes.cardName};
        margin-top: 1rem;
    }
`

export const SectionTitle = (props: {children: React.ReactNode}) => {
    return <StyledSectionTitle>{props.children}</StyledSectionTitle>
}

const StyledUnfocusedText = styled.p`
    font-size: ${(props) => props.theme.fontSizes.text1Size};
    color: ${(props) => props.theme.colors.darkGray};
    font-weight: 300;
`

export const UnfocusedText = (props: {children: React.ReactNode}) => {
    return <StyledUnfocusedText>{props.children}</StyledUnfocusedText>
}

const StyledBlockTitle = styled.p`
    text-align: left;
    font-size: ${(props) => props.theme.fontSizes.cardName} !important;
    color: ${(props) => props.theme.colors.darkBlue};
    font-weight: 500;
    margin-bottom: 10px;
`

export const BlockTitle = (props: {children: React.ReactNode}) => {
    return <StyledBlockTitle>{props.children}</StyledBlockTitle>
}

const StyledBlockContent = styled.p`
    text-align: left;
    font-size: ${(props) => props.theme.fontSizes.text2Size};
    margin: 1.5% 0 3% 0;
`

export const BlockContent = (props: {children: React.ReactNode}) => {
    return <StyledBlockContent>{props.children}</StyledBlockContent>
}