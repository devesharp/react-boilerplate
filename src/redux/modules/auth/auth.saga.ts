import { all, takeLatest, put, call, delay } from 'redux-saga/effects';
import { typeAuthLogout } from '~/redux/modules/auth/auth.interface';

export function setToken({ payload }: any): void {
   if (!payload) return;

   const { token } = payload.auth;

   if (token) {
      // Http.defaults.headers.Authorization = `Bearer ${token}`;
   }
}

export function* logout(): Generator {
   yield delay(2000);
   // Limpar Token
   yield put({ type: 'empty' });
}

export const AuthSaga = all([takeLatest('persist/REHYDRATE' as any, setToken), takeLatest(typeAuthLogout, logout)]);
