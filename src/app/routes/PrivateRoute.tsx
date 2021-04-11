import React from 'react';
import QueryString from 'query-string';
import { Route, useLocation, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router';
import { useAuth } from '~/app/hooks/useAuth';
import { Dashboard } from '~/app/components/Dashboard/Dashboard';

interface IPrivateRouteProps extends RouteProps {
   isPrivate?: boolean;
}

export function PrivateRoute({ isPrivate = false, component: Component, ...rest }: IPrivateRouteProps): any {
   const { isLogged } = useAuth();
   const location = useLocation();
   const query = QueryString.parse(location.search);

   if (!isLogged && isPrivate) {
      if (location.pathname === '/logout') {
         return <Redirect to="/login" />;
      }

      if (location.pathname === '/' || location.pathname === '') {
         return <Redirect to="/login" />;
      }

      return <Redirect to={`/login?redirect=${location.pathname}`} />;
   }

   if (isLogged && !isPrivate) {
      if (query.redirect) {
         return <Redirect to={query.redirect as string} />;
      }
      return <Redirect to="/" />;
   }

   if (isPrivate) {
      return (
         <Dashboard>
            <Route {...rest} component={Component} />
         </Dashboard>
      );
   }

   return <Route {...rest} component={Component} />;
}
