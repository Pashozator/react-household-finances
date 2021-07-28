import { Endpoint } from '../../../core/api/interfaces/endpoint';
import { RequestMethod } from '../../../core/api/enums/request-method.enum';
import { Goal } from '../../interfaces/goal';

export function putGoal(query: PutGoalRequestQuery, body: PutGoalRequestBody): Endpoint {
	return {
		url: 'goals/:id',
		method: RequestMethod.PUT,
		query,
		body
	}
}

export interface PutGoalRequestQuery {
	id: string;
}

export interface PutGoalRequestBody extends Goal {}
