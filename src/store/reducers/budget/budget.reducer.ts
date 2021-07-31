import { BudgetActions } from '../../actions/budget.actions';
import { ActionWithPayload } from '../../interfaces/action-with-payload.interface';
import { Budget } from '../../../domain/interfaces/budget';

export const budgetInitialState: Budget = {
	operations: [],
	debit: 0
}

export function budgetReducer(state: Budget = budgetInitialState, action: ActionWithPayload<BudgetActions>): Budget {
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
		case BudgetActions.CREATE_OPERATION: {
			return state;
		}
		case BudgetActions.CREATE_OPERATION_SUCCESS: {
			return { operations: [action.payload, ...state.operations], debit: state.debit + action.payload.value };
		}
		case BudgetActions.CREATE_OPERATION_FAILURE: {
			return state;
		}
		case BudgetActions.UPDATE_OPERATION: {
			return state;
		}
		case BudgetActions.UPDATE_OPERATION_SUCCESS: {
			let operations = [...state.operations];
			const index = operations.findIndex(operation => operation.id === action.payload.id);

			operations[index] = action.payload;

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
