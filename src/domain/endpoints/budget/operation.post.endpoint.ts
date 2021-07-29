import { Endpoint } from '../../../core/api/interfaces/endpoint';
import { RequestMethod } from '../../../core/api/enums/request-method.enum';
import { Operation } from '../../interfaces/operation';

export function postOperation(body: PostOperationRequestBody): Endpoint {
	return {
		url: 'budget/operations',
		method: RequestMethod.POST,
		body
	}
}

export interface PostOperationRequestBody extends Operation {}
