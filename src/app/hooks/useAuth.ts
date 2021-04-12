import { useDispatch, useSelector } from 'react-redux';
import { differenceInMinutes, parseISO } from 'date-fns';
import { actionLogOut, actionSetAuth } from '~/app/store/modules/auth';
import { IAuthReducer } from '~/app/store/modules/auth/auth.interface';
import { actionCleanUser } from '~/app/store/modules/user';

const selectAuth = (store: any): any => store.auth;

type IUseAuth = {
   updateToken: (token: string) => void;
   logout: () => void;
   isLogged: boolean;
   lastCheckAt: number;
};

export function useAuth(): IUseAuth {
   const dispatch = useDispatch();
   const auth = useSelector(selectAuth) as IAuthReducer;

   function updateToken(token: string): void {
      dispatch(actionSetAuth(true, token));
   }

   function logout(): void {
      dispatch(actionLogOut());
      dispatch(actionCleanUser());
   }

   return {
      isLogged: auth.isLogged as boolean,
      lastCheckAt: auth.lastCheck
         ? differenceInMinutes(
              new Date(),
              typeof auth.lastCheck === 'string' ? parseISO(auth.lastCheck as any) : auth.lastCheck,
           )
         : Number.MAX_SAFE_INTEGER,
      updateToken,
      logout,
   };
}
