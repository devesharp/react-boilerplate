import { useSelector } from 'react-redux';
import { IUser } from '~/common/types/User.interface';

const selectUser = (store: any): any => store.user;

export function useUser(): IUser {
   return useSelector(selectUser) as IUser;
}
