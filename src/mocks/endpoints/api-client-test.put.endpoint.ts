import { RequestMethod } from '../../core/api/enums/request-method.enum';
import { Endpoint } from '../../core/api/interfaces/endpoint';

export function apiClientTestPutEndpoint(query: ApiClientTestPutRequestQuery, body: ApiClientTestPutRequestBody): Endpoint {
	return {
		url: 'api-client-test/:id',
		method: RequestMethod.PUT,
		query,
		body
	}
}

export interface ApiClientTestPutRequestQuery {
	id: string;
}

export interface ApiClientTestPutRequestBody {
	value: number;
}
