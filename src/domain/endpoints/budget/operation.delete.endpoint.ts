import { Endpoint } from '../../../core/api/interfaces/endpoint';
import { RequestMethod } from '../../../core/api/enums/request-method.enum';

export function deleteOperation(query: DeleteOperationRequestQuery): Endpoint {
	return {
		url: 'budget/operations/:id',
		method: RequestMethod.DELETE,
		query
	}
}

export interface DeleteOperationRequestQuery {
	id: string;
}
