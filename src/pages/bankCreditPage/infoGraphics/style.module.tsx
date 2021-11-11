import React from 'react';
import styled from 'styled-components';

export const GraphicBlockContent = styled.p`
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSizes.text2Size};
`
export const AdditionalContent = styled.p`
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSizes.text1Size};
    color: ${(props) => props.theme.colors.darkGray};
`