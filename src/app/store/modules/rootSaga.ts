import { all } from 'redux-saga/effects';
import { AuthSaga } from './auth';

export const rootSaga = function* rootSaga(): any {
   return yield all([AuthSaga]);
};
