import React from 'react';
import styled from 'styled-components';

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

export const OuterPassWrapper = ({children}) => {
    return (
        <StyledWrapper>{children}</StyledWrapper>
    )
}

export const PassDescWrapper = ({children}) => {
    return (
        <StyledPassDescWrapper>{children}</StyledPassDescWrapper>
    )
}

export const PassAlertWrapper = ({children}) => {
    return (
        <StyledPassAlertWrapper>{children}</StyledPassAlertWrapper>
    )
}