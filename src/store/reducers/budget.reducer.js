import * as BudgetActions from '../actions/budget.actions';
import { guid } from '../../utils/guid-util';
import { fromJS } from 'immutable';
import * as moment from 'moment';

const initialState = fromJS({
	operations: [],
	debit: 0
});

export function budgetReducer(state = initialState, action) {
	switch (action.type) {
		case BudgetActions.GET_BUDGET: {
			return state;
		}
		case BudgetActions.GET_BUDGET_SUCCESS: {
			return state.update(() => fromJS(action.payload));
		}
		case BudgetActions.GET_BUDGET_FAILURE: {
			return state;
		}
		case BudgetActions.ADD_OPERATION: {
			return state;
		}
		case BudgetActions.ADD_OPERATION_SUCCESS: {
			return state.set('operations', state.get('operations').insert(null, fromJS(action.payload)))
				.set('debit', state.get('debit') + action.payload.value);
		}
		case BudgetActions.ADD_OPERATION_FAILURE: {
			return state;
		}
		case BudgetActions.EDIT_OPERATION: {
			return state;
		}
		case BudgetActions.EDIT_OPERATION_SUCCESS: {
			let operations = state.get('operations');
			const index = operations.findIndex(operation => operation.get('id') === action.payload.id);

			operations = operations.update(index, () => fromJS(action.payload));

			let debit = 0;

			operations.forEach(operation => {
				debit += operation.get('value')
			});

			return state.set('operations', operations)
			.set('debit', debit);
		}
		case BudgetActions.EDIT_OPERATION_FAILURE: {
			return state;
		}
		case BudgetActions.REMOVE_OPERATION: {
			return state;
		}
		case BudgetActions.REMOVE_OPERATION_SUCCESS: {
			const operations = state.get('operations').filter(operation => operation.get('id') !== action.payload.id),
				debit = state.get('debit') - action.payload.value;

			return state.set('operations', operations)
				.set('debit', debit);
		}
		case BudgetActions.REMOVE_OPERATION_FAILURE: {
			return state;
		}
		case BudgetActions.REDUCE_DEBIT: {
			const operation = {
				id: guid(),
				label: `Realizacja celu: ${action.payload.label}`,
				date: moment().format('YYYY-MM-DD'),
				value: -action.payload.value,
				description: action.payload.description
			};

			return state.set('operations', state.get('operations').insert(null, fromJS(operation)))
				.set('debit', state.get('debit') - action.payload.value);
		}
		default:
			return state;
	}
}
