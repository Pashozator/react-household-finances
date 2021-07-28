import { Endpoint } from '../../../core/api/interfaces/endpoint';
import { RequestMethod } from '../../../core/api/enums/request-method.enum';

export function deleteGoal(query: DeleteGoalRequestQuery): Endpoint {
	return {
		url: 'goals/:id',
		method: RequestMethod.DELETE,
		query
	}
}

export interface DeleteGoalRequestQuery {
	id: string;
}
