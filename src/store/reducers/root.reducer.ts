import { combineReducers, Reducer } from 'redux';
import { budgetReducer } from './budget/budget.reducer';
import { RootState } from '../interfaces/root-state.interface';
import { goalsReducer } from './goals/goals.reducer';
import { dialogsReducer } from './dialogs/dialogs.reducer';

export const rootReducer: Reducer<RootState> = combineReducers({
	budget: budgetReducer,
	goals: goalsReducer,
	dialogs: dialogsReducer
});
