import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const configureStore = (initialState: {}) => {
  //@ts-ignore
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
export const store = configureStore({});
