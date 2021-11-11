import React from 'react';
import styled from 'styled-components';

export const RequirementWrapper = styled.div`
    width: 49%;
    border-radius: 4px;
    margin-bottom: 3% !important;
`

export const UpperBlockWrapper = styled.div`
    background: ${(props) => props.theme.colors.lightGray};
    padding: 4% 6%;
    > p {
        margin: 0;
    }
`

export const LowerBlockWrapper = styled.div`
    background: ${(props) => props.theme.colors.milkyGray};
    padding: 4% 6%;
    > p {
        margin: 0;
    }
`

export const LowerBlockTitle = styled.p`
    font-weight: 500;
`

export const LowerBlockContent = styled.p`
    margin-bottom: 25px !important;
`