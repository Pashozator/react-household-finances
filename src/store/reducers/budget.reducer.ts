import { BudgetState } from '../interfaces/budget-state.interface';
import { BudgetActions } from '../actions/budget.actions';
import { ActionWithPayload } from '../interfaces/action-with-payload.interface';

export const budgetInitialState: BudgetState = {
	operations: [],
	debit: 0
}

export function budgetReducer(state: BudgetState = budgetInitialState, action: ActionWithPayload<BudgetActions>): BudgetState {
	switch (action.type) {
		case BudgetActions.GET_BUDGET: {
			return state;
		}
		case BudgetActions.GET_BUDGET_SUCCESS: {
			return action.payload;
		}
		case BudgetActions.GET_BUDGET_FAILURE: {
			return state;
		}
		case BudgetActions.ADD_OPERATION: {
			return state;
		}
		case BudgetActions.ADD_OPERATION_SUCCESS: {
			return { operations: [action.payload, ...state.operations], debit: state.debit + action.payload.value };
		}
		case BudgetActions.ADD_OPERATION_FAILURE: {
			return state;
		}
		case BudgetActions.EDIT_OPERATION: {
			return state;
		}
		case BudgetActions.EDIT_OPERATION_SUCCESS: {
			let operations = [...state.operations];
			const index = operations.findIndex(operation => operation.id === action.payload.id);

			operations[index] = action.payload;

			let debit = 0;

			operations.forEach(operation => {
				debit += operation.value
			});

			return { operations, debit };
		}
		case BudgetActions.EDIT_OPERATION_FAILURE: {
			return state;
		}
		case BudgetActions.REMOVE_OPERATION: {
			return state;
		}
		case BudgetActions.REMOVE_OPERATION_SUCCESS: {
			const operations = state.operations.filter(operation => operation.id !== action.payload.id),
				debit = state.debit - action.payload.value;

			return { operations, debit };
		}
		case BudgetActions.REMOVE_OPERATION_FAILURE: {
			return state;
		}
		default:
			return state;
	}
}
