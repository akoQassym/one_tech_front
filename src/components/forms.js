import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5%;
    width: 450px;
`

export const FormWrapper = ({children}) => {
    return (
        <StyledForm>{children}</StyledForm>
    )
}