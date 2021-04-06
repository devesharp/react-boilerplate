import { IAction } from '~/redux/interfaces';
import { IAuthReducer, typeSetAuth, typeAuthLogout } from './auth.interface';

export function actionSetAuth(isLogged: boolean, token: string): IAction<IAuthReducer> {
   return {
      type: typeSetAuth,
      payload: {
         token,
         isLogged,
      },
   };
}

export function actionLogOut(): IAction<IAuthReducer> {
   return {
      type: typeAuthLogout,
      payload: {
         token: null,
         isLogged: false,
      },
   };
}
