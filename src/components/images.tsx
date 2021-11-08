import React from 'react';
import styled from 'styled-components';

const StyledLogoWrapper = styled.img`
    width: 26px;
    height: 26px;
` 

export const LogoWrapper = (props: {src: string, alt?: string}) => {
    return (
        <StyledLogoWrapper src={props.src} alt={props.alt}></StyledLogoWrapper>
    )
}

