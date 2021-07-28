import { Endpoint } from '../../../core/api/interfaces/endpoint';
import { RequestMethod } from '../../../core/api/enums/request-method.enum';

export function getBudget(): Endpoint {
	return {
		url: 'budget',
		method: RequestMethod.GET
	}
}
