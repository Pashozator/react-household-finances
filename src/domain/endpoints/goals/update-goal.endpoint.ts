import { Endpoint } from '../../../core/api/interfaces/endpoint';
import { RequestMethod } from '../../../core/api/enums/request-method.enum';

export function updateGoalEndpoint(query: UpdateGoalEndpointRequestQuery, body: UpdateGoalEndpointRequestBody): Endpoint {
	return {
		url: 'goals/:id',
		method: RequestMethod.PUT,
		query,
		body
	}
}

export interface UpdateGoalEndpointRequestQuery {
	id: string;
}

export interface UpdateGoalEndpointRequestBody {
	label: string;
	value: number;
	description: string;
}
