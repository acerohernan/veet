import { LivekitRTCService } from '@/infrastructure/livekit/livekit.rtc.service';
import { RoomController } from './room.controller';

import { RoomService } from '@/domain/services/room.service';

// services needed fro controllers
const rtcService = new LivekitRTCService();
const roomService = new RoomService(rtcService);

// controllers
export const roomController = new RoomController(roomService);
