import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { rootReducer } from './reducers/root.reducer';
import { rootSaga } from './sagas/root.saga';
import { budgetInitialState } from './reducers/budget.reducer';
import { goalsInitialState } from './reducers/goals.reducer';

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
export const store: Store = createStore(rootReducer, { budget: budgetInitialState, goals: goalsInitialState }, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
