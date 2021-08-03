import { Endpoint } from '../../../core/api/interfaces/endpoint';
import { RequestMethod } from '../../../core/api/enums/request-method.enum';

export function createOperationEndpoint(body: CreateOperationEndpointRequestBody): Endpoint {
	return {
		url: 'budget/operations',
		method: RequestMethod.POST,
		body
	}
}

export interface CreateOperationEndpointRequestBody {
	label: string;
	date: string;
	value: number;
	description: string;
}
