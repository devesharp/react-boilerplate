import { combineReducers } from 'redux';
import { AuthReducer as auth } from '~/app/store/modules/auth';
import { UserReducer as user } from '~/app/store/modules/user';

export const rootReducer = combineReducers({
   auth,
   user,
});
