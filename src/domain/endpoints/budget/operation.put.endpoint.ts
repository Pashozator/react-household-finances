import { Endpoint } from '../../../core/api/interfaces/endpoint';
import { RequestMethod } from '../../../core/api/enums/request-method.enum';
import { Operation } from '../../interfaces/operation';

export function putOperation(query: PutOperationRequestQuery, body: PutOperationRequestBody): Endpoint {
	return {
		url: 'budget/operations/:id',
		method: RequestMethod.PUT,
		query,
		body
	}
}

export interface PutOperationRequestQuery {
	id: string;
}

export interface PutOperationRequestBody extends Operation {}
