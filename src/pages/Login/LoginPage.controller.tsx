import React, { FunctionComponent, useState, useRef } from 'react';
import { useViewForm } from '@devesharp/react-hooks';
import * as Yup from 'yup';
import { API } from '~/common/api/ApiManager';
import { useAuth } from '~/hooks/useAuth';
import { IUser } from '~/common/types/User.interface';
import { useUser } from '~/hooks/useUser';

export function LoginPageController(props?: any): any {
   const [error, setError] = useState('');
   const { updateToken } = useAuth();
   const { updateUser } = useUser();

   const { saving: loading, onSubmitForm, formRef } = useViewForm({
      resolveCreate: API.login,
      yupValidateSchema: Yup.object().shape({
         login: Yup.string().required('Informe o login'),
         password: Yup.string().required('Informe a senha'),
      }),
      onSuccess(res: IUser) {
         updateUser(res);
         updateToken(res.access_token);
      },
      onFailed(res) {
         setError(res?.data?.error);
      },
   });

   return {
      error,
      loading,
      onSubmitForm,
      formRef,
   };
}
