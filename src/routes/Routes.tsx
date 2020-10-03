import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from '~/pages/Home';
import {NotfoundPage} from "~/routes/NotFound";

export function Routes(): any {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route component={NotfoundPage} />
        </Switch>
    );
}
