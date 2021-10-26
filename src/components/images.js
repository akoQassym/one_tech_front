import React from 'react';
import styled from 'styled-components';

const StyledLogoWrapper = styled.img`
    width: 26px;
    height: 26px;
` 

const StyledCardWrapper = styled.img`
    width: 288px;
    height: 179px;
    border-radius: 5px;
    margin: 5px 0 15px 0;
    box-shadow: -4px 8px 24px 0px #0000003D;
`

export const LogoWrapper = ({src, alt}) => {
    return (
        <StyledLogoWrapper src={src} alt={alt}></StyledLogoWrapper>
    )
}

export const CardImgWrapper = ({src, alt}) => {
    return (
        <StyledCardWrapper src={src} alt={alt}></StyledCardWrapper>
    )
}