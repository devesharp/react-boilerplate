import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LoadingScreen } from '~/app/components/LoadingScreen/LoadingScreen';
import { actionLogOut } from '~/app/store/modules/auth';

export const Logout: React.FunctionComponent<any> = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      setTimeout(() => {
         dispatch(actionLogOut());
      }, 1000);
   });

   return <LoadingScreen retry={() => {}} show />;
};
