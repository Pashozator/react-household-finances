import { combineReducers } from 'redux';
import { budgetReducer } from './budget.reducer';
import { goalsReducer } from './goals.reducer';
import { dialogReducer } from './dialogs.reducer';

export const appReducer = combineReducers({
	budget: budgetReducer,
	goals: goalsReducer,
	dialogs: dialogReducer
});
