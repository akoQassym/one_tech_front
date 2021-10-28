import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingAnimation = keyframes`
    0% {
        transform: scaleY(0.1);
        background: ;
    }
    50% {
        transform: scaleY(1);
        background: ${(props) => props.theme.colors.lightForteMain};
    }
    100% {
        transform: scaleY(0.1);
        background: transparent;
    }
`

const StyledLoading = styled.div`
    z-index: 5;
    display: block;
    margin-top: 10%;
    margin-bottom: 10%;
    margin-left: auto;
    margin-right: auto;

    .bar {
        width: 10px;
        height: 30px;
        background: ${(props) => props.theme.colors.forteMain};
        display: inline-block;
        transform-origin: bottom center;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        animation: ${LoadingAnimation} 1.2s linear infinite;
    }
    .bar1 {
        animation-delay: 0.1s;
    }
    .bar2 {
        animation-delay: 0.2s;
    }
    .bar3 {
        animation-delay: 0.3s;
    }
    .bar4 {
        animation-delay: 0.4s;
    }
    .bar5 {
        animation-delay: 0.5s;
    }
    .bar6 {
        animation-delay: 0.6s;
    }
    .bar7 {
        animation-delay: 0.7s;
    }
    .bar8 {
        animation-delay: 0.8s;
    }
`

export const Loading = () => {
    return (
        <StyledLoading>
            <div class="bar bar1"></div>
            <div class="bar bar2"></div>
            <div class="bar bar3"></div>
            <div class="bar bar4"></div>
            <div class="bar bar5"></div>
            <div class="bar bar6"></div>
            <div class="bar bar7"></div>
            <div class="bar bar8"></div>
            <div>Загрузка..</div>
        </StyledLoading>
    )
}