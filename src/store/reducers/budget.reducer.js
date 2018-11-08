import * as BudgetActions from '../actions/budget.actions';
import { guid } from '../../utils/guid-util';
import * as moment from 'moment';

const initialState = {
	operations: [],
	debit: 0
};

export function budgetReducer(state = initialState, action) {
	switch (action.type) {
		case BudgetActions.ADD_OPERATION: {
			return { ...state, operations: [action.payload, ...state.operations], debit: state.debit + action.payload.value };
		}
		case BudgetActions.EDIT_OPERATION: {
			const operations = state.operations,
				index = operations.findIndex(operation => operation.id === action.payload.id);

			operations[index] = action.payload;

			let debit = 0;

			for (const operation of operations) {
				debit += operation.value;
			}

			return { ...state, operations: operations, debit: debit };
		}
		case BudgetActions.REMOVE_OPERATION: {
			return {
				...state,
				operations: state.operations.filter(operation => operation.id !== action.payload.id),
				debit: state.debit - action.payload.value
			};
		}
		case BudgetActions.REDUCE_DEBIT: {
			const operation = {
				id: guid(),
				label: `Realizacja celu: ${action.payload.label}`,
				date: moment().format('YYYY-MM-DD'),
				value: -action.payload.value,
				description: action.payload.description
			};

			return { ...state, operations: [operation, ...state.operations], debit: state.debit - action.payload.value };
		}
		default:
			return state;
	}
}
