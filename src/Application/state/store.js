import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
];

function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

  if (module.hot) {
    module.hot.accept('./rootReducer', () =>
      store.replaceReducer(require('./rootReducer').default)
    );
  }

  return store;
}

export default configureStore();