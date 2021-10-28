import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        width: 100vw;
        height: 100%;
        margin: 0;
        padding: 0;
        color: ${(props) => props.theme.colors.textBlack};
        font-family: 'Rubik', sans-serif !important;
        overflow-x: hidden;
    }
`

export default GlobalStyles;
