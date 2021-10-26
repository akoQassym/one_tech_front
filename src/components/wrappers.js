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

// Landing page
const StyledLandingWrapper = styled.div`
    width: 100vw;
    font-size: ${(props) => props.theme.fontSizes.text2Size};
    & section {
        padding: 0 15%;
    }
`

const StyledHeaderWrapper = styled.section`
    display: flex;
    height: 60px;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.milky};
    font-size: ${(props) => props.theme.fontSizes.text1Size};

    & .header-block {
        display: flex;
        align-items: center;
    }

    & .header-block > div {
        margin: 0 10px;
    }

    & .header-icon-group {
        display: flex;
        align-items: center;
    }

    & .header-icon-group > p {
        margin: 0;
    }
`

const StyledHeaderLinksWrapper = styled.ul`
    display: flex;
    align-items: center;
    list-style-type: none;
    margin: 0;
    font-size: ${(props) => props.theme.fontSizes.text2Size};

    & li {
        padding: 0;
        display: inline-block;
        margin: 0 15px;
        width: 100%;
        cursor: pointer;
        font-weight: bold;
    }

    & .selected {
        padding: 20px 0 16px 0;
        border-bottom: 4px solid ${(props) => props.theme.colors.forteMain};
        color: ${(props) => props.theme.colors.forteMain};
    }
`

const StyledSubheaderWrapper = styled.section`
    max-width: 700px;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    font-size: ${(props) => props.theme.fontSizes.text1Size};

    & .subheader-element {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 25px 0;
    }
`

const StyledBannerWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.colors.white};
    padding: 2% 0;
    background: ${(props) => props.theme.colors.gradientColor2};
    background: radial-gradient(circle, rgba(1,181,198,1) 0%, rgba(4,105,133,1) 150%);

    & .left {
        padding: 2% 0;
    }

    & .page-name {
        font-size: ${(props) => props.theme.fontSizes.text0size};
    }

    & .section-title-huge {
        font-weight: bold;
        font-size: ${(props) => props.theme.fontSizes.sectionTitleHuge};
    }

    & .section-desc {
        font-size: ${(props) => props.theme.fontSizes.text3size};
    }

    & .span-div {
        display: flex;
        margin: 2rem 0 1rem;
    }

    & .span-div span {
        width: 50px;
        height: 5px;
        border-radius: 5px;
        background-color: ${(props) => props.theme.colors.white};
        margin-right: 10px;
    }

    & .selected {
        background-color: ${(props) => props.theme.colors.darkBlue} !important;
    }
`

const StyledSectionWrapper = styled.section`
    padding: 3% 0;

    & .section-title {
        font-size: ${(props) => props.theme.fontSizes.sectionTitle};
        font-weight: bold;
        text-align: left;
    }

    & .card-div {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
`

const StyledCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 310px;
    margin-bottom: 2rem;

    & .card-name {
        font-size: ${(props) => props.theme.fontSizes.cardName};
        font-weight: bold;
    }

    & p {
        margin: 10px 0;
    }
`

export const LandingWrapper = ({children}) => {
    return (
        <StyledLandingWrapper>{children}</StyledLandingWrapper>
    )
}

export const HeaderWrapper = ({children}) => {
    return (
        <StyledHeaderWrapper>{children}</StyledHeaderWrapper>
    )
}

export const HeaderLinksWrapper = ({children}) => {
    return (
        <StyledHeaderLinksWrapper>{children}</StyledHeaderLinksWrapper>
    )
}

export const SubheaderWrapper = ({children}) => {
    return (
        <StyledSubheaderWrapper>{children}</StyledSubheaderWrapper>
    )
}

export const BannerWrapper = ({children}) => {
    return <StyledBannerWrapper>{children}</StyledBannerWrapper>
}

export const SectionWrapper = ({children}) => {
    return (
        <StyledSectionWrapper>{children}</StyledSectionWrapper>
    )
}

export const CardWrapper = ({children}) => {
    return (
        <StyledCardWrapper>{children}</StyledCardWrapper>
    )
}