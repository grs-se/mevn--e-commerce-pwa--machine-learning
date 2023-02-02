const { User } = require('../../models/users');
const { Categories } = require('../../models/categories');

const request = require('supertest');
let server;

describe('/api/categories', () => {
	beforeEach(() => {
		server = require('../../index');
	});
	afterEach(async () => {
		server.close();
		await Categories.deleteMany({});
	});

	describe('GET / All', () => {
		it('should return all categories', async () => {
			await Categories.collection.insertMany([
				{
					name: 'cat1',
				},
				{
					name: 'cat2',
				},
			]);
			const res = await request(server).get('/api/categories/All');

			expect(res.status).toBe(200);
			expect(res.body.length).toBe(2);
			expect(res.body.some((c) => c.name === 'cat1')).toBeTruthy();
			expect(res.body.some((c) => c.name === 'cat2')).toBeTruthy();
		});
	});
});
