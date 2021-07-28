import { RequestMethod } from '../enums/request-method.enum';

export interface Endpoint {
	url: string;
	method: RequestMethod;
	query?: any;
	body?: any;
}
