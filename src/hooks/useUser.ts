import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '~/common/types/User.interface';
import { actionUpdateUser } from '~/store/modules/user';

const selectUser = (store: any): any => store.user;

type IUseAuth = {
   updateUser: (u: IUser) => void;
   user: IUser;
};

export function useUser(): IUseAuth {
   const dispatch = useDispatch();
   const user = useSelector(selectUser) as IUser;

   function updateUser(u: IUser): void {
      dispatch(actionUpdateUser(u));
   }

   return { user, updateUser };
}
