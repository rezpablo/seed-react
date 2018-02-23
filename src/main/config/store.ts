import thunk from 'redux-thunk';
import multi from 'redux-multi';
import promise from 'redux-promise';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from '../reducer';
import * as localForage from 'localforage';

let middleware = [thunk, multi, promise];
let enhancers = [applyMiddleware(...middleware)];

const persistConfig = {
    key: 'root',
    storage: localForage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer, enhancers);
    let persistor = persistStore(store);
    return { store, persistor };
};