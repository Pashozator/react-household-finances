import { combineReducers, Reducer } from 'redux';
import { budgetReducer } from './budget.reducer';
import { RootState } from '../interfaces/root-state.interface';
import { goalsReducer } from './goals.reducer';
import { dialogsReducer } from './dialogs.reducer';

export const rootReducer: Reducer<RootState> = combineReducers({
	budget: budgetReducer,
	goals: goalsReducer,
	dialogs: dialogsReducer
});
