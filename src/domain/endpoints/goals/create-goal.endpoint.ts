import { Endpoint } from '../../../core/api/interfaces/endpoint';
import { RequestMethod } from '../../../core/api/enums/request-method.enum';

export function createGoalEndpoint(body: CreateGoalEndpointRequestBody): Endpoint {
	return {
		url: 'goals',
		method: RequestMethod.POST,
		body
	}
}

export interface CreateGoalEndpointRequestBody {
	label: string;
	value: number;
	description: string;
}
