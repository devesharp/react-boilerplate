import { combineReducers } from 'redux';
import { AuthReducer as auth } from '~/redux/modules/auth';

export const rootReducer = combineReducers({
   auth,
});
