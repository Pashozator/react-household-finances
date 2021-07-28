import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { rootReducer } from './reducers/root.reducer';
import { rootSaga } from './sagas/root.saga';

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
export const store: Store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
