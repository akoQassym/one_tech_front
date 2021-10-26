import React from 'react';
import styled from 'styled-components';
import { Button } from "@mui/material";

const StyledPassButton = styled(Button)`
    && {
        padding: 12px;
        background-color: deeppink;
        margin-top: 2rem;
        width: 250px;
        border-radius: 10px;
        text-transform: none;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    &&:disabled{
        color: white;
    }
`

export const PassSubmitButton = ({ children }) => {
    return (
        <StyledPassButton
            variant="contained"
        >{children}</StyledPassButton>
    )
}

