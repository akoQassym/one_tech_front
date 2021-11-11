import React from 'react';
import styled from 'styled-components';

export const NavBlock = styled.div`
    width: 150px;
    margin: 0 2px;
    font-size: ${(props) => props.theme.fontSizes.text2Size};
    background-color: ${(props) => props.theme.colors.darkBlue};
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    padding: 15px 0;
    opacity: 60%;
    border: none;
    cursor: pointer;
    outline: none;
    font-family: ${(props) => props.theme.fontFamily.main};
    transition: 0.25s all ease;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`