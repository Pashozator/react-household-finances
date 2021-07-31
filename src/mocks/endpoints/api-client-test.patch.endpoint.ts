import { RequestMethod } from '../../core/api/enums/request-method.enum';
import { Endpoint } from '../../core/api/interfaces/endpoint';

export function apiClientTestPatchEndpoint(query: ApiClientTestPatchRequestQuery, body: ApiClientTestPatchRequestBody): Endpoint {
	return {
		url: 'api-client-test/:id',
		method: RequestMethod.PATCH,
		query,
		body
	}
}

export interface ApiClientTestPatchRequestQuery {
	id: string;
}

export interface ApiClientTestPatchRequestBody {
	value: number;
}
