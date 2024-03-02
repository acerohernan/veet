import { Room, RoomEvent, setLogLevel } from "livekit-client";

import {
  handleParticipantConnected,
  handleParticipantDisconnected,
  handleTrackMuted,
  handleTrackSubscribed,
  handleTrackUnMuted,
  handleLocalTrackPublished,
  handleLocalTrackUnpublished,
} from "./listeners";

import { store } from "@/store";
import { roomActions } from "@/store/room";
import { RemoteParticipant } from "@/store/types";

import { parseLivekitParticipant } from "./utils";

let room: Room | undefined;

export const connectToWebRTCRoom = async (accessToken: string) => {
  setLogLevel(process.env.NODE_ENV === "development" ? "debug" : "silent");

  room = new Room({ adaptiveStream: true, dynacast: true });

  // pre-warn conneciton
  await room.prepareConnection(import.meta.env.VITE_LIVEKIT_WS_URL);

  // setup listeners
  room
    .on(RoomEvent.ParticipantConnected, handleParticipantConnected)
    .on(RoomEvent.ParticipantDisconnected, handleParticipantDisconnected)
    .on(RoomEvent.TrackSubscribed, handleTrackSubscribed)
    .on(RoomEvent.LocalTrackPublished, handleLocalTrackPublished)
    .on(RoomEvent.LocalTrackUnpublished, handleLocalTrackUnpublished)
    .on(RoomEvent.TrackMuted, handleTrackMuted)
    .on(RoomEvent.TrackUnmuted, handleTrackUnMuted);

  await room.connect(import.meta.env.VITE_LIVEKIT_WS_URL, accessToken);

  // store information
  store.dispatch(roomActions.setRoom({ id: room.name }));
  store.dispatch(roomActions.setLocalParticipant(parseLivekitParticipant(room.localParticipant)));

  const participants: RemoteParticipant[] = [];
  for (const [, p] of room.remoteParticipants) {
    participants.push(parseLivekitParticipant(p));
  }
  store.dispatch(roomActions.setParticipants(participants));
};

export const disconnectFromRoom = async () => {
  if (!room) return;

  await room.disconnect(true);

  // clean up
  store.dispatch(roomActions.setRoom(null));
  store.dispatch(roomActions.setLocalParticipant(null));
  store.dispatch(roomActions.setParticipants([]));
};

export const getWebRTCRoom = (): Room => {
  if (!room) throw new Error("webrtc room connection not established!");
  return room;
};
