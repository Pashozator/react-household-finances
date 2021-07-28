import { Endpoint } from '../../../core/api/interfaces/endpoint';
import { RequestMethod } from '../../../core/api/enums/request-method.enum';

export function getGoals(): Endpoint {
	return {
		url: 'goals',
		method: RequestMethod.GET
	}
}