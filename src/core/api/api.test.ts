import { api } from './api';
import { apiClientTestGetEndpoint } from '../../mocks/endpoints/api-client-test.get.endpoint';
import {
	apiClientTestPostEndpoint,
	ApiClientTestPostRequestBody
} from '../../mocks/endpoints/api-client-test.post.endpoint';
import {
	apiClientTestPutEndpoint,
	ApiClientTestPutRequestBody,
	ApiClientTestPutRequestQuery
} from '../../mocks/endpoints/api-client-test.put.endpoint';
import {
	apiClientTestPatchEndpoint,
	ApiClientTestPatchRequestBody,
	ApiClientTestPatchRequestQuery
} from '../../mocks/endpoints/api-client-test.patch.endpoint';
import {
	apiClientTestDeleteEndpoint,
	ApiClientTestDeleteRequestQuery
} from '../../mocks/endpoints/api-client-test.delete.endpoint';

describe('Api', () => {
	it('should return response from GET request', async () => {
		expect(await api.request(apiClientTestGetEndpoint())).toBe(true);
	});

	it('should return response from POST request', async () => {
		const body: ApiClientTestPostRequestBody = { value: 100 };
		expect(await api.request(apiClientTestPostEndpoint(body))).toEqual({ body });
	});

	it('should return response from PUT request', async () => {
		const query: ApiClientTestPutRequestQuery = { id: '1' };
		const body: ApiClientTestPutRequestBody = { value: 100 };
		expect(await api.request(apiClientTestPutEndpoint(query, body))).toEqual({ query, body });
	});

	it('should return response from PATCH request', async () => {
		const query: ApiClientTestPatchRequestQuery = { id: '1' };
		const body: ApiClientTestPatchRequestBody = { value: 100 };
		expect(await api.request(apiClientTestPatchEndpoint(query, body))).toEqual({ query, body });
	});

	it('should return response from DELETE request', async () => {
		const query: ApiClientTestDeleteRequestQuery = { id: '1' };
		expect(await api.request(apiClientTestDeleteEndpoint(query))).toEqual({ query });
	});
});
