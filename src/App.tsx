import React from 'react';
import { Router } from 'react-router-dom';
import history from '~/config/history';
import { ThemeVariables } from '~/config/theme';
import { Routes } from '~/routes/Routes';
import { ThemeProvider } from 'styled-components';

function App(): JSX.Element {
    return (
        <ThemeProvider theme={ThemeVariables}>
            <Router history={history}>
                <Routes />
            </Router>
        </ThemeProvider>
    );
}

export default App;
