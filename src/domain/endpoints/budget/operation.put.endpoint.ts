import { Endpoint } from '../../../core/api/interfaces/endpoint';
import { RequestMethod } from '../../../core/api/enums/request-method.enum';

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

export interface PutOperationRequestBody {
	label: string;
	date: string;
	value: number;
	description: string;
}
