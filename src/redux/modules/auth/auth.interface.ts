export const typeSetAuth = '@auth/set';
export const typeAuthLogout = '@auth/logout';

export interface IAuthReducer {
   isLogged: boolean;
   token: string | null;
}