import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from '~/config/history';
import { ThemeVariables } from '~/config/theme';
import { Routes } from '~/routes/Routes';
import { store, persistor } from '~/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

function App(): JSX.Element {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <ThemeProvider theme={ThemeVariables}>
               <Router history={history}>
                  <Routes />
               </Router>
            </ThemeProvider>
         </PersistGate>
      </Provider>
   );
}

export default App;
