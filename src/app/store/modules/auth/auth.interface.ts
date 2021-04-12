export const typeSetAuth = '@auth/set';
export const typeUpdateAuthCheck = '@auth/update-date-check';
export const typeAuthLogout = '@auth/logout';

export interface IAuthReducer {
   isLogged?: boolean;
   token?: string | null;
   lastCheck?: Date | null;
}
