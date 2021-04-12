import { useView } from '@devesharp/react-hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API } from '~/app/common/api/ApiManager';
import { useAuth } from '~/app/hooks/useAuth';
import { actionUpdateDateVerifyAuth } from '~/app/store/modules/auth';

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

// Verificar token de 5 em 5 min
const intervalCheckToken = 5;

export function useLoadApp(): IUseLoadApp {
   const { isLogged, lastCheckAt } = useAuth();
   const dispatch = useDispatch();
   console.log(lastCheckAt);

   const { started, errorLoadData, criticalError, registerOnInit, reloadPage: retryLoad } = useView({
      resolves: {
         checkToken: lastCheckAt > intervalCheckToken ? API.checkToken : null,
      },
      firstLoad: isLogged,
   });

   useEffect(() =>
      registerOnInit((v) => {
         if (v.checkToken) {
            console.log('updated');
            dispatch(actionUpdateDateVerifyAuth());
         }
      }),
   );

   return {
      // Não mostrar loadingscreen
      started: lastCheckAt <= intervalCheckToken || !isLogged || started,
      errorLoadData: errorLoadData && isLogged,
      criticalError: criticalError && isLogged,
      retryLoad,
   };
}
