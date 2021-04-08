import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from '~/pages/Home';
import { NotfoundPage } from '~/routes/NotFound';
import {LoginPage} from "~/pages/Login/LoginPage";

export function Routes(): any {
   return (
      <Switch>
         <Route path="/" exact component={HomePage} />
         <Route path="/login" exact component={LoginPage} />
         <Route component={NotfoundPage} />
      </Switch>
   );
}
