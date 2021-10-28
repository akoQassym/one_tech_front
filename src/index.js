import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyles from './utils/globalStyles';
import { ThemeProvider } from 'styled-components';
import Theme from './utils/theme';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);