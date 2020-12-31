import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import history from '~/config/history';
import { ThemeVariables } from '~/config/theme';
import { Routes } from '~/routes/Routes';
import { store, persistor } from '~/redux/store';
import { GlobalStyles } from '~/styles';

function App(): JSX.Element {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <ThemeProvider theme={ThemeVariables}>
               <Router history={history}>
                  <Routes />
               </Router>
               <GlobalStyles />
            </ThemeProvider>
         </PersistGate>
      </Provider>
   );
}

export default App;
