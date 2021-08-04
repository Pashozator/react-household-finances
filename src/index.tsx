import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<App/>
			</MuiPickersUtilsProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
