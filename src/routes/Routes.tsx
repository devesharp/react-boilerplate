import React from 'react';
import { Switch } from 'react-router-dom';
import { HomePage } from '~/pages/Home';
import { NotfoundPage } from '~/routes/NotFound';
import { LoginPage } from '~/pages/Login/LoginPage';
import { PrivateRoute } from '~/routes/PrivateRoute';
import { LoadingScreen } from '~/components/LoadingScreen/LoadingScreen';
import { useLoadApp } from '~/hooks/useLoadApp';

export function Routes(): any {
   const { started, criticalError, errorLoadData, retryLoad } = useLoadApp();

   return (
      <>
         <LoadingScreen retry={retryLoad} error={criticalError || errorLoadData} show={!started} />

         {started && (
            <Switch>
               {/* public routes */}
               <PrivateRoute path="/login" exact component={LoginPage} />

               {/* private routes */}
               <PrivateRoute path="/" exact component={HomePage} isPrivate />

               {/* not found */}
               <PrivateRoute component={NotfoundPage} />
            </Switch>
         )}
      </>
   );
}
