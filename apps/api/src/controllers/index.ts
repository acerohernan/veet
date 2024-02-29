import { RoomService } from '@/domain/services/room.service';

import { AuthMiddleware } from '@/middlewares/auth';

import { LivekitRTCService } from '@/infrastructure/livekit/livekit.rtc.service';

import { RoomController } from './room.controller';

// services needed for controllers
const rtcService = new LivekitRTCService();
const roomService = new RoomService(rtcService);

// middlewares
export const authMiddleware = new AuthMiddleware(rtcService);

// controllers
export const roomController = new RoomController(roomService);
