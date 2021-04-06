import { IAction } from '~/store/interfaces';
import { IAuthReducer, typeAuthLogout, typeSetAuth } from '~/store/modules/auth/auth.interface';

const INITIAL_STATE: IAuthReducer = {
   isLogged: false,
   token: null,
};

export function AuthReducer(state = INITIAL_STATE, action: IAction<IAuthReducer>): IAuthReducer {
   switch (action.type) {
      case typeAuthLogout:
         return INITIAL_STATE;
      case typeSetAuth:
         return action.payload;
      default:
         return state;
   }
}
