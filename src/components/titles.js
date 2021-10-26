import React from 'react';
import styled from 'styled-components';

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