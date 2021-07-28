import { Endpoint } from '../../../core/api/interfaces/endpoint';
import { RequestMethod } from '../../../core/api/enums/request-method.enum';
import { Goal } from '../../interfaces/goal';

export function postGoal(body: PostGoalRequestBody): Endpoint {
	return {
		url: 'goals',
		method: RequestMethod.POST,
		body
	}
}

export interface PostGoalRequestBody extends Goal {}
