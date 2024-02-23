import { RoomController } from './room.controller';

import { RoomService } from '@/domain/services/room.service';

// services needed fro controllers
const roomService = new RoomService();

// controllers
export const roomController = new RoomController(roomService);
