import { all, takeLatest, put, delay } from 'redux-saga/effects';
import { HttpService } from '@devesharp/react-utils';

export function setToken({ payload }: any): void {
   if (!payload) return;

   const { token } = payload.auth;

   if (token) {
      HttpService.defaults.headers.Authorization = `Bearer ${token}`;
   }
}

export const AuthSaga = all([takeLatest('persist/REHYDRATE' as any, setToken)]);
