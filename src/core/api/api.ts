import { Endpoint } from './interfaces/endpoint';
import { RequestMethod } from './enums/request-method.enum';
import { QueryParam } from './interfaces/query-param';

export class ApiService {
	private base: string = process.env.REACT_APP_HOST as string;
	private headers: any = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	};

	public request<T>(endpoint: Endpoint): Promise<T> {
		const url: string = this.createUrl(endpoint);

		switch (endpoint.method) {
			case RequestMethod.GET:
				return fetch(url, {
					method: RequestMethod.GET,
					headers: this.headers
				})
					.then((response: Response) => response.json());
			case RequestMethod.POST:
				return fetch(url, {
					method: RequestMethod.POST,
					body: JSON.stringify(endpoint.body),
					headers: this.headers
				})
					.then((response: Response) => response.json());
			case RequestMethod.PATCH:
				return fetch(url, {
					method: RequestMethod.PATCH,
					body: JSON.stringify(endpoint.body),
					headers: this.headers
				})
					.then((response: Response) => response.json());
			case RequestMethod.PUT:
				return fetch(url, {
					method: RequestMethod.PUT,
					body: JSON.stringify(endpoint.body),
					headers: this.headers
				})
					.then((response: Response) => response.json());
			case RequestMethod.DELETE:
				return fetch(url, {
					method: RequestMethod.DELETE,
					headers: this.headers
				})
					.then((response: Response) => response.json());
			default:
				throw new Error('Unknown http method');
		}
	}

	private createUrl(endpoint: Endpoint): string {
		const [url, queryParams]: [string, QueryParam[]] = this.parseQuery(
			endpoint.url,
			endpoint.query,
		);
		const query = this.createQueryString(queryParams);

		return `${this.base}/${url}${query}`;
	}

	private parseQuery(url: string, query: any): [string, QueryParam[]] {
		const queryParams: QueryParam[] = [];

		for (let prop in query) {
			if (!query.hasOwnProperty(prop)) {
				continue;
			}

			const queryParamName: string = `:${prop}`;
			const queryParamValue: any = query[prop];

			if (url.includes(queryParamName)) {
				url = url.replaceAll(queryParamName, queryParamValue);
				continue;
			}

			queryParams.push({ name: prop, value: queryParamValue });
		}

		return [url, queryParams];
	}

	private createQueryString(queryParams: QueryParam[]): string {
		if (!queryParams.length) {
			return '';
		}

		return `?${queryParams
			.map((param: QueryParam) => `${param.name}=${param.value}`)
			.join('&')}`;
	}
}

export const apiService = new ApiService();