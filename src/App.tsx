import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeVariables } from '~/config/theme';

function App(): JSX.Element {
    return <ThemeProvider theme={ThemeVariables}>
    </ThemeProvider>;
}

export default App;
