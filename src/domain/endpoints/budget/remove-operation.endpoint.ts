import { Endpoint } from '../../../core/api/interfaces/endpoint';
import { RequestMethod } from '../../../core/api/enums/request-method.enum';

export function removeOperationEndpoint(query: RemoveOperationEndpointRequestQuery): Endpoint {
	return {
		url: 'budget/operations/:id',
		method: RequestMethod.DELETE,
		query
	}
}

export interface RemoveOperationEndpointRequestQuery {
	id: string;
}
