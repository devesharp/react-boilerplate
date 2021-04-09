import { IAction } from '~/app/store/interfaces';
import { typeUserUpdate, typeEmptyUser } from './user.interface';

export function actionUpdateUser<IUser>(user: IUser): IAction<IUser> {
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
