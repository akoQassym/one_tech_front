import React from 'styled-components';
import styled from 'styled-components';

export const AdvantageTitle = styled.p`
    font-size: ${(props) => props.theme.fontSizes.text2Size};
    font-style: ${(props) => props.theme.fontFamily.main};
    font-weight: 500;
    padding: 10px;
    margin: 0;
`

export const AdvantageContent = styled.p`
    font-size: ${(props) => props.theme.fontSizes.text2Size};
    font-style: ${(props) => props.theme.fontFamily.main};
    font-weight: 400;
    padding: 0 10px;
    margin: 0;
`