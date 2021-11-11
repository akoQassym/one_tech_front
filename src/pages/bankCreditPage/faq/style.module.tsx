import React from 'styled-components';
import styled from 'styled-components';

export const CardTitle = styled.p`
    font-size: ${(props) => props.theme.fontSizes.text2Size};
    font-weight: 500;
    margin: 0 0 25px 0;
`

export const CardContent = styled.p`
    font-size: ${(props) => props.theme.fontSizes.text2Size};
    color: ${(props) => props.theme.colors.darkGray};
    font-weight: 400;
    margin: 25px 0 0 0;
`

export const AccordionFaqQuestion = styled.p`
    font-size: ${(props) => props.theme.fontSizes.text2Size};
    font-style: ${(props) => props.theme.fontFamily.main};
    font-weight: 400;
    padding: 10px;
    margin: 0;
`

export const AccordionFaqAnswer = styled.p`
    font-size: ${(props) => props.theme.fontSizes.text2Size};
    font-style: ${(props) => props.theme.fontFamily.main};
    font-weight: 400;
    padding: 0 10px;
    margin: 0;
`

export const FaqAccordion = styled.div`
    & > div {
        border-left: none !important;
        border-radius: none !important;
    }
    margin: 6% 0;
`

export const SubContent = styled.p`
    margin-top: 3%;
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSizes.text0size};
    color: '#999999';
`