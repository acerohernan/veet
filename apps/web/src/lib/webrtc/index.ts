import { Room, RoomEvent, setLogLevel } from "livekit-client";

import { handleParticipantConnected, handleParticipantDisconnected } from "./listeners";

import { store } from "@/store";
import { roomActions } from "@/store/room";

import { RemoteParticipant } from "../types";

let room: Room | undefined;

export const connectToWebRTCRoom = async (accessToken: string) => {
  setLogLevel(process.env.NODE_ENV === "development" ? "debug" : "silent");

  room = new Room({ adaptiveStream: true, dynacast: true });

  // pre-warn conneciton
  await room.prepareConnection(import.meta.env.VITE_LIVEKIT_WS_URL);

  // setup listeners
  room
    .on(RoomEvent.ParticipantConnected, handleParticipantConnected)
    .on(RoomEvent.ParticipantDisconnected, handleParticipantDisconnected);

  await room.connect(import.meta.env.VITE_LIVEKIT_WS_URL, accessToken);

  // store information
  store.dispatch(roomActions.setRoom({ id: room.name }));
  store.dispatch(roomActions.setLocalParticipant({ id: room.localParticipant.sid }));

  const participants: RemoteParticipant[] = [];
  for (const [, p] of room.remoteParticipants) {
    participants.push({ id: p.sid });
  }
  store.dispatch(roomActions.setParticipants(participants));
};

export const disconnectToRoom = async () => {
  if (!room) return;

  await room.disconnect(true);

  // clean up
  store.dispatch(roomActions.setRoom(null));
  store.dispatch(roomActions.setLocalParticipant(null));
  store.dispatch(roomActions.setParticipants([]));
};
