import { BudgetActions } from '../../actions/budget.actions';
import { ActionWithPayload } from '../../interfaces/action-with-payload.interface';
import { Budget } from '../../../domain/interfaces/budget';
import { Action } from 'redux';
import { Operation } from '../../../domain/interfaces/operation';

export const budgetInitialState: Budget = {
	operations: [],
	debit: 0
}

export function budgetReducer(state: Budget = budgetInitialState, action: Action | ActionWithPayload<Operation | Budget>): Budget {
	switch (action.type) {
		case BudgetActions.GET_BUDGET: {
			return state;
		}
		case BudgetActions.GET_BUDGET_SUCCESS: {
			return (action as ActionWithPayload<Budget>).payload;
		}
		case BudgetActions.GET_BUDGET_FAILURE: {
			return state;
		}
		case BudgetActions.CREATE_OPERATION: {
			return state;
		}
		case BudgetActions.CREATE_OPERATION_SUCCESS: {
			const operation: Operation = (action as ActionWithPayload<Operation>).payload;
			return { operations: [operation, ...state.operations], debit: state.debit + operation.value };
		}
		case BudgetActions.CREATE_OPERATION_FAILURE: {
			return state;
		}
		case BudgetActions.UPDATE_OPERATION: {
			return state;
		}
		case BudgetActions.UPDATE_OPERATION_SUCCESS: {
			let operations = [...state.operations];
			const operation: Operation = (action as ActionWithPayload<Operation>).payload;
			const index = operations.findIndex(_operation => _operation.id === operation.id);

			operations[index] = operation;

			let debit = 0;

			operations.forEach(operation => {
				debit += operation.value
			});

			return { operations, debit };
		}
		case BudgetActions.UPDATE_OPERATION_FAILURE: {
			return state;
		}
		case BudgetActions.REMOVE_OPERATION: {
			return state;
		}
		case BudgetActions.REMOVE_OPERATION_SUCCESS: {
			const operation: Operation = (action as ActionWithPayload<Operation>).payload;
			const operations = state.operations.filter(_operation => _operation.id !== operation.id),
				debit = state.debit - operation.value;

			return { operations, debit };
		}
		case BudgetActions.REMOVE_OPERATION_FAILURE: {
			return state;
		}
		default:
			return state;
	}
}
