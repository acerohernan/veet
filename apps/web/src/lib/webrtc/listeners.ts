import { RemoteParticipant } from "livekit-client";

import { store } from "@/store";
import { roomActions } from "@/store/room";

export const handleParticipantConnected = (participant: RemoteParticipant) => {
  store.dispatch(roomActions.addParticipant({ id: participant.sid }));
};

export const handleParticipantDisconnected = (participant: RemoteParticipant) => {
  store.dispatch(roomActions.removeParticipant(participant.sid));
};
