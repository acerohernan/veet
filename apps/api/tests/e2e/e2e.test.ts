import request from 'supertest';
import type TestAgent from 'supertest/lib/agent';

import { Server } from '../../src/server';

import type { RTCService } from '@/domain/interfaces/rtc.service';

import { LivekitRTCService } from '@/infrastructure/livekit/livekit.rtc.service';

let app: Server;
let _request: TestAgent;
let rtcService: RTCService;

describe('API Service routes', () => {
  beforeAll(async () => {
    app = new Server();
    app.run();
    _request = request(app.httpServer);
    rtcService = new LivekitRTCService();
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

  describe('POST /v1/room', () => {
    it('should run correctly and return an access token', async () => {
      const res = await _request.post('/v1/room').send({
        roomId: 'room_test123',
        participantId: 'test123',
        participantName: 'test123',
      });

      expect(res.status).toBe(201);
      expect(res.body.accessToken).toBeDefined();
    });
  });

  describe('GET/v1/room/demo', () => {
    it('should run correctly and return an access token', async () => {
      const query = new URLSearchParams();
      query.append('participantId', 'participant123');
      query.append('participantName', 'participant123_name');
      const res = await _request.get('/v1/room/demo').query(query.toString());

      expect(res.status).toBe(200);
      expect(res.body.accessToken).toBeDefined();
    });
  });

  describe('GET/v1/room/invite', () => {
    it('should return an unathorized status for calls without a token', async () => {
      const query = new URLSearchParams();
      const res = await _request.get('/v1/room/invite').query(query.toString());

      expect(res.status).toBe(401);
    });

    it('should run correctly and return an access token for invited participant', async () => {
      const { accessToken } = await rtcService.createAccessToken({
        roomId: 'demo',
        participantId: 'guest123',
        participantName: 'Guest',
      });

      const query = new URLSearchParams();
      query.append('participantName', 'Guest');
      const res = await _request
        .get('/v1/room/invite')
        .query(query.toString())
        .set('Authorization', `Bearer ${accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body.guestAccessToken).toBeDefined();
    });
  });
});
