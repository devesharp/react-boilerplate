import { rootSaga } from '~/redux/modules/rootSaga';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '~/redux/modules/rootReducer';
import persistReducer from './modules/persistReducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistReducer(rootReducer), applyMiddleware(sagaMiddleware));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
