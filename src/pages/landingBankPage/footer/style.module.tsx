import React from 'react';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';

const StyledFooterWrapper = styled.section`
    background-color: ${(props) => props.theme.colors.milky};
`

export const FooterNavElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 25%;
`

export const FooterNavTitle = styled.p`
    color: ${(props) => props.theme.colors.textBlack};
    font-weight: 500;
`

export const FooterNavLinkMail = styled.p`
    cursor: pointer;
    color: ${(props) => props.theme.colors.anotherBlue};
    font-weight: 500;
    &:hover {
        color: ${(props) => props.theme.colors.forteMain}
    }
`

export const FooterNavLink = styled.p`
    cursor: pointer;
    &:hover {
        color: ${(props) => props.theme.colors.forteMain}
    }
`

export const FooterBottom = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 550px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const FooterBootomLeft = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .text {
        width: 50%;
        .call-to-action {
            color: #0E2B91;
            font-size: 16px !important;
            font-weight: 500;
        }

        > p {
            font-size: ${(props) => props.theme.fontSizes.text1Size};
        }
    }

    .social-media {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        img {
            margin: 0 20px 0 0;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 550px) {
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
        .text {
            width: 100%;
            text-align: center;
            > p {
                font-size: ${(props) => props.theme.fontSizes.text0size};
            }
        }
        img {
            margin: 10px !important;
        }
    }
`

export const FooterBottomRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 550px) {
        margin: 7% 0 !important;
    }
`

export const AccordionSummaryText = styled.p`
    font-weight: 500;
    font-size: ${(props) => props.theme.fontSizes.text1Size};
    margin: 0;
`

export const FooterWrapper = (props: {children: React.ReactNode}) => {
    return (
        <StyledFooterWrapper>{props.children}</StyledFooterWrapper>
    )
}

export const StyledAccordion = styled(Accordion)`
    background-color: 'transparent';
    box-shadow: 'none';
    border: 'none';
    outline: 'none';
    &:before {
        content: '';
    };
`