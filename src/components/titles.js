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

export const TitlePassword = ({children}) => {
    return <StyledTitlePassword>{children}</StyledTitlePassword>
}

export const SubtitlePassword = ({children}) => {
    return <StyledSubtitlePassword>{children}</StyledSubtitlePassword>
}

// Landing Page
const StyledSectionTitle = styled.p`
    font-size: ${(props) => props.theme.fontSizes.sectionTitle};
    font-weight: bold;
    text-align: left;
    margin-top: 3rem;
`

export const SectionTitle = ({children}) => {
    return <StyledSectionTitle>{children}</StyledSectionTitle>
}

const StyledUnfocusedText = styled.p`
    font-size: ${(props) => props.theme.fontSizes.text1Size};
    color: ${(props) => props.theme.colors.darkGray};
    font-weight: 300;
`

export const UnfocusedText = ({children}) => {
    return <StyledUnfocusedText>{children}</StyledUnfocusedText>
}

const StyledBlockTitle = styled.p`
    text-align: left;
    font-size: ${(props) => props.theme.fontSizes.cardName} !important;
    color: ${(props) => props.theme.colors.darkBlue};
    font-weight: 500;
`

export const BlockTitle = ({children}) => {
    return <StyledBlockTitle>{children}</StyledBlockTitle>
}