import React from 'styled-components';
import styled from 'styled-components';
import NativeSelect from '@mui/material/NativeSelect';
import { NativeSelectProps } from '@mui/material/NativeSelect';

const StyledHeaderWrapper = styled.section`
    height: 60px;
    background-color: ${(props) => props.theme.colors.milky};
    font-size: ${(props) => props.theme.fontSizes.text1Size};

    @media screen and (max-width: 550px) {
        height: fit-content;
        padding: 1% 4% 1% 0 !important;
    }
`

export const SideMenu = styled.div`
    width: 200px;
    height: 100%;
    padding: 5% 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
    top: 0;
    z-index: 5;
    background-color: ${(props) => props.theme.colors.forteMain};
    color: ${(props) => props.theme.colors.white};
    position: fixed;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

    & > button {
        position: absolute;
        top: 0;
        right: 0;
    }

    & > a {
        text-decoration: none;
        padding: 10px 0;
        margin: 5px 0;
        font-size: ${(props) => props.theme.fontSizes.text3Size};
        color: inherit;
    }

    & .selected {
        border-left: 3px solid white;
        padding-left: 10px;
    }
`

const StyledHeaderLinksWrapper = styled.ul`
    display: flex;
    align-items: center;
    list-style-type: none;
    margin: 0;
    font-size: ${(props) => props.theme.fontSizes.text2Size};
    padding: 0 8% 0 0;

    & li {
        padding: 0;
        display: inline-block;
        margin: 0 15px;
        width: 100%;
        cursor: pointer;
        font-weight: bold;
        transition: 0.1s all ease-in;
        > a {
            text-decoration: none;
            color: inherit;
        }
    }

    & .selected {
        padding: 20px 0 16px 0;
        border-bottom: 4px solid ${(props) => props.theme.colors.forteMain};
        color: ${(props) => props.theme.colors.forteMain};
    }

    & li:hover {
        color: ${(props) => props.theme.colors.forteMain};
    }
`

const StyledInputSelectCityWrapper = styled(NativeSelect)`
    && {
        font-size: ${(props) => props.theme.fontSizes.text1Size};
        font-family: ${(props) => props.theme.fontFamily.main};
        border: none !important;
        outline: none !important;
        padding-left: 5px;
    }

    &&::before, &&::after {
        content: none;
    }

    > svg {
       display: none;
    }
`

const StyledInputSelectLanWrapper = styled(NativeSelect)`
    && {
        font-size: ${(props) => props.theme.fontSizes.text1Size};
        font-family: ${(props) => props.theme.fontFamily.main};
        border: none !important;
        outline: none !important;
        padding-left: 5px;
    }

    &&::before, &&::after {
        content: none;
    }
`

export const HeaderWrapper = (props: {children: React.ReactNode}) => {
    return (
        <StyledHeaderWrapper>{props.children}</StyledHeaderWrapper>
    )
}

export const HeaderLinksWrapper = (props: {children: React.ReactNode}) => {
    return (
        <StyledHeaderLinksWrapper>{props.children}</StyledHeaderLinksWrapper>
    )
}

export const InputSelectLanWrapper = (
    props: {
        children: React.ReactNode, 
        defaultValue: string | number,
        inputProps: {
            name: string,
            id: string
        }
    }
) => {
    return (
        <StyledInputSelectLanWrapper
            defaultValue={props.defaultValue}
            inputProps={props.inputProps}
            variant="standard"
        >
            {props.children}
        </StyledInputSelectLanWrapper>
    )
}

export const InputSelectCityWrapper = (
    props: {
        children: React.ReactNode, 
        defaultValue: string | number,
        inputProps: {
            name: string,
            id: string
        }
    }
) => {
    return (
        <StyledInputSelectCityWrapper
            defaultValue={props.defaultValue}
            inputProps={props.inputProps}
            variant="standard"
        >
            {props.children}
        </StyledInputSelectCityWrapper>
    )
}