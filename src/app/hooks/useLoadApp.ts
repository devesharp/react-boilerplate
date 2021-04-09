import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useView } from '@devesharp/react-hooks';
import { actionLogOut, actionSetAuth } from '~/app/store/modules/auth';
import { IAuthReducer } from '~/app/store/modules/auth/auth.interface';
import { actionCleanUser } from '~/app/store/modules/user';
import { API } from '~/app/common/api/ApiManager';
import { useAuth } from '~/app/hooks/useAuth';

/**
 * Carregar todas as dependências da aplicação, ex:
 * - websocket
 * - verificar se token é válido
 * - loading screen
 */
type IUseLoadApp = {
   started: boolean;
   errorLoadData: boolean;
   criticalError: boolean;
   retryLoad: () => void;
};

export function useLoadApp(): IUseLoadApp {
   const { isLogged } = useAuth();

   const { started, errorLoadData, criticalError, registerOnInit, reloadPage: retryLoad } = useView({
      resolves: {
         checkToken: API.checkToken,
      },
      firstLoad: isLogged,
   });

   return {
      started: !isLogged || started,
      errorLoadData: errorLoadData && isLogged,
      criticalError: criticalError && isLogged,
      retryLoad,
   };
}
