import React from 'react';
import { useSelector } from 'react-redux';
import {Input, Tabs} from '@devesharp/react-web';
import Style from './HomePage.style';

export const HomePage: React.FunctionComponent<any> = () => {
   const auth: any = useSelector<any>((store: any) => store.auth);

   return (
      <Style data-cy="home-page">
         <Tabs
            options={[
               {
                  id: 'tab2',
                  name: 'Tab A',
               },
               {
                  id: 'taba',
                  name: 'Tab B',
               },
            ]}
            onSelect={() => {
               // console.log('sdsd');
            }}
         />
         Home Page
         <br />
         <Input title={'sdsde'}></Input>
         Logged: {!auth.isLogged ? 'false' : 'true'}
      </Style>
   );
};
