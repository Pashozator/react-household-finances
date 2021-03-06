import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Provider from 'react-redux/es/components/Provider';
import { applyMiddleware, createStore } from 'redux';
import { appReducer } from './store/reducers/app.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Immutable from 'immutable';
import createSagaMiddleware from 'redux-saga';
import appSaga from './store/sagas/app.saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, Immutable.fromJS({}), composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(appSaga);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
