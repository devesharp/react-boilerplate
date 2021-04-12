import { IAction } from '~/app/store/interfaces';
import { IAuthReducer, typeSetAuth, typeAuthLogout, typeUpdateAuthCheck } from './auth.interface';

export function actionSetAuth(isLogged: boolean, token: string): IAction<IAuthReducer> {
   return {
      type: typeSetAuth,
      payload: {
         token,
         isLogged,
         lastCheck: new Date(),
      },
   };
}

export function actionUpdateDateVerifyAuth(): IAction<IAuthReducer> {
   return {
      type: typeUpdateAuthCheck,
      payload: {
         lastCheck: new Date(),
      },
   };
}

export function actionLogOut(): IAction<IAuthReducer> {
   return {
      type: typeAuthLogout,
      payload: {
         token: null,
         isLogged: false,
         lastCheck: null,
      },
   };
}
