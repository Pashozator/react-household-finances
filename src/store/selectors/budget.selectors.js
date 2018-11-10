import { createSelector } from 'reselect';

export const selectBudget = state => state.get('budget');

export const selectOperations = createSelector(
	selectBudget,
	substate => substate.get('operations').toJS()
);

export const selectDebit = createSelector(
	selectBudget,
	substate => substate.get('debit')
);
