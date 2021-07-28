import { combineReducers, Reducer } from 'redux';
import { budgetReducer } from './budget.reducer';
import { RootState } from '../interfaces/root-state.interface';

export const rootReducer: Reducer<RootState> = combineReducers({
	budget: budgetReducer
});
