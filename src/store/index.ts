import { createStore, applyMiddleware, StoreEnhancer } from 'redux';
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import rootReducer from './reducers'
import {rootSaga} from "./sagas";
 
const persistConfig = {
    key: 'auth',
    storage: storage,
    whitelist: ['auth']
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, thunk, logger];
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = composeWithDevTools(applyMiddleware(...middlewares));
const store = createStore(persistedReducer, middleware);
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { persistor, store };