import request from 'supertest';
import type TestAgent from 'supertest/lib/agent';

import { Server } from '../../src/server';

let app: Server;
let _request: TestAgent;

describe('API Service routes', () => {
  beforeAll(async () => {
    app = new Server();
    app.run();
    _request = request(app.httpServer);
  });

  afterAll(async () => {
    if (!app) return;
    app.stop();
  });

  describe('GET /', () => {
    it('should return a successful http status code', async () => {
      const res = await _request.get('/');

      expect(res.status).toBe(200);
    });
  });
});
