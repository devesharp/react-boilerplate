import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers: Reducer<any, any>): Reducer<any, any> => {
   return persistReducer(
      {
         key: 'app',
         storage,
         whitelist: ['auth', 'user'],
      },
      reducers,
   );
};
