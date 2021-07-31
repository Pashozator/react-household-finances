import { RequestMethod } from '../../core/api/enums/request-method.enum';
import { Endpoint } from '../../core/api/interfaces/endpoint';

export function apiClientTestGetEndpoint(): Endpoint {
	return {
		url: 'api-client-test',
		method: RequestMethod.GET
	}
}
