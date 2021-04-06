import { IAction } from '~/store/interfaces';
import { typeUserUpdate, typeEmptyUser } from './user.interface';

export function UserReducer(state = null, action: IAction<any>): any {
   switch (action.type) {
      case typeEmptyUser:
         return action.payload;
      case typeUserUpdate:
         return action.payload;
      default:
         return state;
   }
}
