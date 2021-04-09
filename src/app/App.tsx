import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import history from '~/app/common/config/history';
import { ThemeVariables } from '~/app/common/config/theme';
import { Routes } from '~/app/routes/Routes';
import { store, persistor } from '~/app/store/store';
import { GlobalStyles } from '~/app/common/styles';
import '~/app/common/config/http';

function App(): JSX.Element {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            {/* <AppProvider initialValue={{}}> */}
            <ThemeProvider theme={ThemeVariables}>
               <Router history={history}>
                  <Routes />
               </Router>
               <GlobalStyles />
            </ThemeProvider>
            {/* </AppProvider> */}
         </PersistGate>
      </Provider>
   );
}

export default App;
