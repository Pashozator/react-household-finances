import { Endpoint } from '../../../core/api/interfaces/endpoint';
import { RequestMethod } from '../../../core/api/enums/request-method.enum';

export function removeGoalEndpoint(query: RemoveGoalEndpointRequestQuery): Endpoint {
	return {
		url: 'goals/:id',
		method: RequestMethod.DELETE,
		query
	}
}

export interface RemoveGoalEndpointRequestQuery {
	id: string;
}
