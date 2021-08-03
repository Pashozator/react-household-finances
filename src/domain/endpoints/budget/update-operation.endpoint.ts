import { Endpoint } from '../../../core/api/interfaces/endpoint';
import { RequestMethod } from '../../../core/api/enums/request-method.enum';

export function updateOperationEndpoint(query: UpdateOperationEndpointRequestQuery, body: UpdateOperationEndpointRequestBody): Endpoint {
	return {
		url: 'budget/operations/:id',
		method: RequestMethod.PUT,
		query,
		body
	}
}

export interface UpdateOperationEndpointRequestQuery {
	id: string;
}

export interface UpdateOperationEndpointRequestBody {
	label: string;
	date: string;
	value: number;
	description: string;
}
