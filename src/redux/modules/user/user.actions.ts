import { IAction } from '~/redux/interfaces';
import { typeUserUpdate, typeEmptyUser } from './user.interface';

export function updateUser<IUser>(user: IUser): IAction<IUser> {
   return {
      type: typeUserUpdate,
      payload: user,
   };
}

export function actionCleanUser(): IAction<null> {
   return {
      type: typeEmptyUser,
      payload: null,
   };
}
