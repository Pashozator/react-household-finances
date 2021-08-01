import { createSelector } from 'reselect';
import { RootState } from '../../interfaces/root-state.interface';
import { Budget } from '../../../domain/interfaces/budget';

export const selectBudget = (state: RootState) => state.budget;

export const selectOperations = createSelector(
	selectBudget,
	(state: Budget) => state.operations
);

export const selectDebit = createSelector(
	selectBudget,
	(state: Budget) => state.debit
);
