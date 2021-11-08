import styled from 'styled-components';
import React from 'react';

const StyledFaqElementWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: baseline;
    border-radius: 4px;
    background: ${(props) => props.theme.colors.milkyGray};
    margin: 3% 0;
    padding: 3%;
    text-align: left;
    width: 33%;
    height: 358px;

    @media screen and (max-width: 550px) {
       width: fit-content;
       height: fit-content;
       padding: 6% 4%;
       margin: 0;
    }
`

export const FaqQuestion = styled.p`
    margin-top: 25px;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: ${(props) => props.theme.fontSizes.text3Size};
`

export const FaqAnswer = styled.p`
    font-weight: 400;
    margin: 0;
`

export const FaqElementWrapper = (props: {children: React.ReactNode, key?: number | string}) => {
    return (
        <StyledFaqElementWrapper key={props.key}>{props.children}</StyledFaqElementWrapper>
    )
}