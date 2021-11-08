import React from 'react';
import styled from 'styled-components';

const StyledSubheaderWrapper = styled.section`
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    font-size: ${(props) => props.theme.fontSizes.text1Size};
    @media screen and (max-width: 550px) {
        display: none;
    }
`

export const SubheaderElement = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 25px 0;
    transition: 0.1s all ease-in;

    &:hover {
        color: ${(props) => props.theme.colors.forteMain};
    }
`

export const SubheaderWrapper = (props: {children: React.ReactNode}) => {
    return (
        <StyledSubheaderWrapper>{props.children}</StyledSubheaderWrapper>
    )
}