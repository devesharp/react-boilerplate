import { combineReducers } from 'redux';
import { AuthReducer as auth } from '~/store/modules/auth';
import { UserReducer as user } from '~/store/modules/user';

export const rootReducer = combineReducers({
   auth,
   user,
});
