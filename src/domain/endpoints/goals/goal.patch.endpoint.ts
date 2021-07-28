import { Endpoint } from '../../../core/api/interfaces/endpoint';
import { RequestMethod } from '../../../core/api/enums/request-method.enum';

export function patchGoal(query: PatchGoalRequestQuery): Endpoint {
	return {
		url: 'goals/:id',
		method: RequestMethod.PATCH,
		query,
		body: {}
	}
}

export interface PatchGoalRequestQuery {
	id: string;
}
