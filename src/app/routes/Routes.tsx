import React from 'react';
import { Switch } from 'react-router-dom';
import { HomePage } from '~/app/pages/Home';
import { NotfoundPage } from '~/app/routes/NotFound';
import { LoginPage } from '~/app/pages/Login/LoginPage';
import { PrivateRoute } from '~/app/routes/PrivateRoute';
import { LoadingScreen } from '~/app/components/LoadingScreen/LoadingScreen';
import { useLoadApp } from '~/app/hooks/useLoadApp';
import {ListingPage} from "~/app/pages/Listing/ListingPage";
import {CreateResourcePage} from "~/app/pages/CreateResource/CreateResourcePage";
import {Logout} from "~/app/routes/Logout";
import {ListingTablePage} from "~/app/pages/ListingTable/ListingTablePage";

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
               <PrivateRoute path="/listing" exact component={ListingPage} isPrivate />
               <PrivateRoute path="/listing-table" exact component={ListingTablePage} isPrivate />
               <PrivateRoute path="/create" exact component={CreateResourcePage} isPrivate />
               <PrivateRoute path="/logout" exact component={Logout} isPrivate />

               {/* not found */}
               <PrivateRoute component={NotfoundPage} />
            </Switch>
         )}
      </>
   );
}
