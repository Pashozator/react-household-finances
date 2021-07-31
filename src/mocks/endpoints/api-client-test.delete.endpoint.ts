import { RequestMethod } from '../../core/api/enums/request-method.enum';
import { Endpoint } from '../../core/api/interfaces/endpoint';

export function apiClientTestDeleteEndpoint(query: ApiClientTestDeleteRequestQuery): Endpoint {
	return {
		url: 'api-client-test/:id',
		method: RequestMethod.DELETE,
		query
	}
}

export interface ApiClientTestDeleteRequestQuery {
	id: string;
}
