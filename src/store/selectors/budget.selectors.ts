import { createSelector } from 'reselect';
import { RootState } from '../interfaces/root-state.interface';
import { BudgetState } from '../interfaces/budget-state.interface';

export const selectBudget = (state: RootState) => state.budget;

export const selectOperations = createSelector(
	selectBudget,
	(state: BudgetState) => state.operations
);

export const selectDebit = createSelector(
	selectBudget,
	(state: BudgetState) => state.debit
);
