import React from 'react';
import { useSelector } from 'react-redux';
import Style from './HomePage.style';

export const HomePage: React.FunctionComponent<any> = () => {
   const auth: any = useSelector<any>((store: any) => store.auth);

   return (
      <Style data-cy="home-page">
         Home Page
         <br />
         Logged: {!auth.isLogged ? 'false' : 'true'}
      </Style>
   );
};
