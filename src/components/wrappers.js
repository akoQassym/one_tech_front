import React from 'react';
import styled, { keyframes } from 'styled-components';

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

export const LandingWrapper = ({children}) => {
    return (
        <StyledLandingWrapper>{children}</StyledLandingWrapper>
    )
}

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
        transition: 0.1s all ease-in;
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
        transition: 0.1s all ease-in;
    }

    & .subheader-element:hover {
        color: ${(props) => props.theme.colors.forteMain};
    }
`

export const SubheaderWrapper = ({children}) => {
    return (
        <StyledSubheaderWrapper>{children}</StyledSubheaderWrapper>
    )
}

const StyledBannerWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.colors.white};
    padding: 2% 0;
    background: ${(props) => props.theme.colors.gradientColor2};
    background: radial-gradient(circle, rgba(1,181,198,1) 0%, rgba(4,105,133,1) 150%);
    position: relative;

    & .left {
        padding: 2% 0 6% 0;
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

    & img {
        max-height: 395px;
    }
`

export const BannerWrapper = ({key, children}) => {
    return <StyledBannerWrapper key={key}>{children}</StyledBannerWrapper>
}

const StyledSectionWrapper = styled.section`
    position: relative;

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

    & .features-div {
        padding: 0 0 3% 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        column-gap: 25px;

        > .feature-element {
            border-radius: 4px;
            width: 50%;
            background: ${(props) => props.theme.colors.milkyGray};
            padding: 0 3%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 285px;
            
            > div {
                display: flex;
                flex-direction: column;
                align-items: left;
                justify-content: space-between;
                height: 100%;
                padding: 1.5% 5% 1.5% 0;
                > p {
                    font-size: ${(props) => props.theme.fontSizes.text2Size};
                }
                > button {
                    margin-bottom: 32px;
                }
            }

            .unique-feature-img {
                align-self: flex-end !important;
            }
        }
    }

    & .flex-div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
`

const StyledFooterWrapper = styled.section`
    background-color: ${(props) => props.theme.colors.milky};

    & .footer {
        display: flex;
        flex-direction: column;

        .footer-nav {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            padding: 3% 0 2% 0;
            border-bottom: 1px solid #BDBDBD;

            .footer-nav-element {
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                .footer-nav-content {
                    cursor: pointer;
                }

                .footer-nav-title {
                    color: '#303030';
                    font-weight: 500;
                }

                .footer-nav-content:hover {
                    color: ${(props) => props.theme.colors.forteMain}
                }
            }

            
        }

        .footer-bottom {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            .call-to-action {
                color: #0E2B91;
                font-size: 16px !important;
                font-weight: 500;
            }

            .text > p {
                font-size: 14px;
            }

            .social-media img{
                margin: 0 10px;
                cursor: pointer;
            }
        }
    }
`

export const FooterWrapper = ({children}) => {
    return (
        <StyledFooterWrapper>{children}</StyledFooterWrapper>
    )
}

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

export const SectionWrapper = ({children}) => {
    return (
        <StyledSectionWrapper>{children}</StyledSectionWrapper>
    )
}

export const CardWrapper = ({key, children}) => {
    return (
        <StyledCardWrapper key={key}>{children}</StyledCardWrapper>
    )
}

const StyledCalculatorWrapper = styled.section`
    margin: 0 auto;
    & > p {
        margin-bottom: 0;
    }
`

const StyledCalculatorGrid = styled.div`
    background: ${(props) => props.theme.colors.milkyGray};
    border-radius: 4px;
    margin: 5% 0 3% 0;
    padding: 2.5% 3%;
    display: flex;
    align-items: flex-start;

    & .left-slider {
        width: 80%;
        padding: 0;
        border-right: 1px solid ${(props) => props.theme.colors.lightGray};

        .left-title {
            margin: 0;
            padding: 0;
            color: ${(props) => props.theme.colors.textBlack};
            font-size: ${(props) => props.theme.fontSizes.text2Size};
        }
    }

    & .right-result {
        padding: 3% 0 3% 3%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 35px;
        width: 30%;

        p {
            padding: 0;
            margin: 0;
        }

        .right-title {
            font-size: ${(props) => props.theme.fontSizes.text1Size};
            font-weight: 400;
        }

        .credit-month {
            color: ${(props) => props.theme.colors.forteMain};
            font-size: ${(props) => props.theme.fontSizes.sectionTitle};
            font-weight: 500;
            padding-top: 7% !important;
        }

        .credit-rate {
            color: ${(props) => props.theme.colors.textBlack};
            font-size: ${(props) => props.theme.fontSizes.cardName};
            padding-top: 7% !important;
        }
    }
`

const StyledSliderWrapper = styled.div`
    display: flex;
    justify-content: baseline;
    align-items: center;
    padding-bottom: 3%;
    & .slider {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 75%;
        margin-right: 15px;
    }

    & .slider > .range {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        span {
            margin: 0;
            font-size: ${(props) => props.theme.fontSizes.text0size};
            color: ${(props) => props.theme.colors.darkgray};
        }
    }
    
    & .slider-value {
        font-size: ${(props) => props.theme.fontSizes.cardName};
        color: ${(props) => props.theme.colors.textBlack};
        font-weight: 400;
    }
`

const StyledSwitchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: baseline;
    margin-bottom: 15px;

    & p {
        margin: 0 0 0 10px;
        padding: 0;
        color: ${(props) => props.theme.colors.textBlack};
        font-size: ${(props) => props.theme.fontSizes.text2Size};
    }
`

export const CreditCalculatorWrapper = ({children}) => {
    return (
        <StyledCalculatorWrapper>{children}</StyledCalculatorWrapper>
    )
}

export const CreditCalculatorGrid = ({children}) => {
    return (
        <StyledCalculatorGrid>{children}</StyledCalculatorGrid>
    )
}

export const SliderWrapper = ({children}) => {
    return (
        <StyledSliderWrapper>{children}</StyledSliderWrapper>
    )
}

export const SwitchWrapper = ({children}) => {
    return (
        <StyledSwitchWrapper>{children}</StyledSwitchWrapper>
    )
}

const StyledFaqWrapper = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 24px;
    padding: 0 0 2% 0;
`

const StyledFaqElementWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: baseline;
    border-radius: 4px;
    background: ${(props) => props.theme.colors.milkyGray};
    padding: 3%;
    text-align: left;
    width: 33%;

    & .faq-question {
        font-weight: 500;
        font-size: ${(props) => props.theme.fontSizes.text3Size};
    }

    & .faq-answer {
        font-weight: 400;
        margin: 0;
    }

`

export const FaqWrapper = ({children}) => {
    return (
        <StyledFaqWrapper>{children}</StyledFaqWrapper>
    )
}

export const FaqElementWrapper = ({children}) => {
    return (
        <StyledFaqElementWrapper>{children}</StyledFaqElementWrapper>
    )
}

const WiggleAnimation = keyframes`
    0% { transform: rotate(0deg); }
   80% { transform: rotate(0deg); }
   85% { transform: rotate(4deg); }
   95% { transform: rotate(-4deg); }
  100% { transform: rotate(0deg); }
`

const StyledMobileBannerWrapper = styled.section`
    margin: 9% 0;
    background-color: ${(props) => props.theme.colors.milkyGray};
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;

    & .left-content {
        padding: 2% 0;
        width: 60%;
        text-align: left;
        li {
            margin: 1.3rem 0;
        }
        > .image-group {
            display: flex;
            flex-direction: row;
            > a {
                margin: 10px 17px 10px 0;
                > img {
                    transition: 0.3s all ease-out;
                    border-radius: 8px;
                }
                > img:hover {
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                }
            }
        }
    }

    > img {
        position: absolute;
        animation: ${WiggleAnimation} 6s infinite;
        right: 24%;
    }
`

export const MobileBannerWrapper = ({children}) => {
    return (
        <StyledMobileBannerWrapper>{children}</StyledMobileBannerWrapper>
    )
}

const StyledTableWrapper = styled.table`
    && {
        border-collapse: collapse;
        width: 100%;
        margin-right: 80px;
    }
    & th, & td {
        text-align: left;
        padding: 8px;
    }
    & tr:nth-child(even) {
        background-color: ${(props) => props.theme.colors.milkyGray};
    }
`

const rotate_animation = keyframes`
    0% {transform: rotate(360deg);}
    100% {transform: rotate(0deg);}
`

const StyledConverterWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.milkyGray};
    border-radius: 4px;
    padding: 1% 4% 2% 6%;
    margin: 0 0 3% 0;
    position: relative;

    & td {
        border-bottom: 1px solid ${(props) => props.theme.colors.darkgray} !important; 
    }

    .cur-btn {
        width: 15%;
        padding: 0 6px;
        cursor: pointer;
    }

    .cur-btn img {
        opacity: 0.5;
    }

    & .selected {
        opacity: 1 !important;
    }

    > img {
        position: absolute;
        left: -40px;
        top: 35%;
        cursor: pointer;
        transition: 0.3s all ease-in-out;
        border-radius: 50px;
    }

    > img:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`

export const TableWrapper = ({children}) => {
    return (
        <StyledTableWrapper>{children}</StyledTableWrapper>
    )
}

export const ConverterWrapper = ({children}) => {
    return (
        <StyledConverterWrapper>{children}</StyledConverterWrapper>
    )
}