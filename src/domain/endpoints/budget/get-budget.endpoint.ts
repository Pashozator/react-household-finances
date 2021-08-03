import { Endpoint } from '../../../core/api/interfaces/endpoint';
import { RequestMethod } from '../../../core/api/enums/request-method.enum';

export function getBudgetEndpoint(): Endpoint {
	return {
		url: 'budget',
		method: RequestMethod.GET
	}
}
