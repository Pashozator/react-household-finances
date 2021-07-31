import { ResponseComposition, rest, RestContext, RestRequest } from 'msw';

export const handlers = [
	rest.get('/api-client-test', async (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		return res(ctx.json(true));
	}),
	rest.post('/api-client-test', async (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		return res(ctx.json({ body: req.body }));
	}),
	rest.put('/api-client-test/:id', async (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		return res(ctx.json({ query: req.params, body: req.body }));
	}),
	rest.patch('/api-client-test/:id', async (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		return res(ctx.json({ query: req.params, body: req.body }));
	}),
	rest.delete('/api-client-test/:id', async (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		return res(ctx.json({ query: req.params }));
	})
];
