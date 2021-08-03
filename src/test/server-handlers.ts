import { ResponseComposition, rest, RestContext, RestRequest } from 'msw';
import { goalMock } from '../mocks/goal.mock';
import { budgetMock } from '../mocks/budget.mock';

export const handlers = [
	rest.get('/api-client-test', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		return res(ctx.json(true));
	}),
	rest.post('/api-client-test', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		return res(ctx.json({ body: req.body }));
	}),
	rest.put('/api-client-test/:id', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		return res(ctx.json({ query: req.params, body: req.body }));
	}),
	rest.patch('/api-client-test/:id', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		return res(ctx.json({ query: req.params, body: req.body }));
	}),
	rest.delete('/api-client-test/:id', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		return res(ctx.json({ query: req.params }));
	}),
	rest.get('/goals', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		return res(ctx.json({ data: [goalMock] }));
	}),
	rest.post('/goals', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		return res(ctx.json({ data: req.body }));
	}),
	rest.put('/goals/:id', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		const body: Record<string, any> = req.body as Record<string, any>;
		return res(ctx.json({ data: { id: req.params.id, realized: false, ...body } }));
	}),
	rest.delete('/goals/:id', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		return res(ctx.json({ data: req.body }));
	}),
	rest.patch('/goals/:id', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		return res(ctx.json({ data: req.body }));
	}),
	rest.get('/budget', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		return res(ctx.json({ data: budgetMock }));
	}),
	rest.post('/budget/operations', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		return res(ctx.json({ data: req.body }));
	}),
	rest.put('/budget/operations/:id', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		const body: Record<string, any> = req.body as Record<string, any>;
		return res(ctx.json({ data: { id: req.params.id, ...body } }));
	}),
	rest.delete('/budget/operations/:id', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		return res(ctx.json({ data: req.body }));
	}),
];
