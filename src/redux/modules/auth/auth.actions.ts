import { IAction } from '~/redux/interfaces';
import { IAuthReducer, typeSetAuth } from '~/redux/modules/auth/auth.interface';

export function actionSetAuth(isLogged: boolean, token = null): IAction<IAuthReducer> {
   return {
      type: typeSetAuth,
      payload: {
         token,
         isLogged,
      },
   };
}
