import { useDispatch, useSelector } from 'react-redux';
import { actionLogOut, actionSetAuth } from '~/store/modules/auth';
import { IAuthReducer } from '~/store/modules/auth/auth.interface';

const selectAuth = (store: any): any => store.auth;

type IUseAuth = {
   updateToken: (token: string) => void;
   logout: () => void;
   isLogged: boolean;
};

export function useAuth(): IUseAuth {
   const dispatch = useDispatch();
   const auth = useSelector(selectAuth) as IAuthReducer;

   function updateToken(token: string): void {
      dispatch(actionSetAuth(true, token));
   }

   function logout(): void {
      dispatch(actionLogOut());
   }

   return {
      isLogged: auth.isLogged,
      updateToken,
      logout,
   };
}
