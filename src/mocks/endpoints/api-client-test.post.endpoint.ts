import { RequestMethod } from '../../core/api/enums/request-method.enum';
import { Endpoint } from '../../core/api/interfaces/endpoint';

export function apiClientTestPostEndpoint(body: ApiClientTestPostRequestBody): Endpoint {
	return {
		url: 'api-client-test',
		method: RequestMethod.POST,
		body
	}
}

export interface ApiClientTestPostRequestBody {
	value: number;
}
