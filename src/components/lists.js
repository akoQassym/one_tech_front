import React from 'react';
import styled from 'styled-components';

const StyledPassDescList = styled.ul`
    & li {
        padding: 0.5rem 0;
    }
`

export const PassDescList = ({children}) => {
    return (
        <StyledPassDescList>{children}</StyledPassDescList>
    )
}