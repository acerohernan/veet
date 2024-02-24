import request from 'supertest';

import { Server } from '../../src/server';

let app: Server;

describe('/', () => {
  beforeAll(async () => {
    app = new Server();
    app.run();
  });
  afterAll(async () => {
    if (!app) return;
    app.stop();
  });

  describe('GET /', () => {
    it('should return a 200 http status', async () => {
      const response = await request(app.httpServer).get('/');
      expect(response.status).toBe(200);
    });
  });
});
