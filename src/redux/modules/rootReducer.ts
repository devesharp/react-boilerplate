import { combineReducers } from 'redux';
import { AuthReducer as auth } from '~/redux/modules/auth';
import { UserReducer as user } from '~/redux/modules/user';

export const rootReducer = combineReducers({
   auth,
   user,
});
