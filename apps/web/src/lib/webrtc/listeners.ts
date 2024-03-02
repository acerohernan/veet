import { LocalParticipant, Participant, RemoteParticipant, RemoteTrack, TrackPublication } from "livekit-client";

import { store } from "@/store";
import { roomActions } from "@/store/room";
import { parseLivekitParticipant } from "./utils";

export const handleParticipantConnected = (p: RemoteParticipant) => {
  store.dispatch(roomActions.addParticipant(parseLivekitParticipant(p)));
};

export const handleParticipantDisconnected = (participant: RemoteParticipant) => {
  store.dispatch(roomActions.removeParticipant(participant.sid));
};

export const handleTrackSubscribed = (_: RemoteTrack, __: TrackPublication, participant: RemoteParticipant) => {
  const storeParticipant = store.getState().room.participants.entities[participant.sid];

  if (!storeParticipant) return;

  store.dispatch(
    roomActions.updateParticipant({
      id: participant.sid,
      changes: {
        isCameraEnabled: participant.isCameraEnabled,
        isMicrophoneEnabled: participant.isMicrophoneEnabled,
      },
    }),
  );
};

export const handleTrackMuted = (_: TrackPublication, participant: Participant) => {
  if (participant instanceof LocalParticipant) {
    store.dispatch(
      roomActions.updateLocalParticipant({
        isCameraEnabled: participant.isCameraEnabled,
        isMicrophoneEnabled: participant.isMicrophoneEnabled,
      }),
    );
    return;
  }

  const storeParticipant = store.getState().room.participants.entities[participant.sid];

  if (!storeParticipant) return;

  store.dispatch(
    roomActions.updateParticipant({
      id: participant.sid,
      changes: {
        isCameraEnabled: participant.isCameraEnabled,
        isMicrophoneEnabled: participant.isMicrophoneEnabled,
      },
    }),
  );
};

export const handleTrackUnMuted = (_: TrackPublication, participant: Participant) => {
  if (participant instanceof LocalParticipant) {
    store.dispatch(
      roomActions.updateLocalParticipant({
        isCameraEnabled: participant.isCameraEnabled,
        isMicrophoneEnabled: participant.isMicrophoneEnabled,
      }),
    );
    return;
  }

  const storeParticipant = store.getState().room.participants.entities[participant.sid];

  if (!storeParticipant) return;

  store.dispatch(
    roomActions.updateParticipant({
      id: participant.sid,
      changes: {
        isCameraEnabled: participant.isCameraEnabled,
        isMicrophoneEnabled: participant.isMicrophoneEnabled,
      },
    }),
  );
};

export const handleLocalTrackPublished = (_: TrackPublication, participant: LocalParticipant) => {
  store.dispatch(
    roomActions.updateLocalParticipant({
      isCameraEnabled: participant.isCameraEnabled,
      isMicrophoneEnabled: participant.isMicrophoneEnabled,
    }),
  );
};

export const handleLocalTrackUnpublished = (_: TrackPublication, participant: LocalParticipant) => {
  store.dispatch(
    roomActions.updateLocalParticipant({
      isCameraEnabled: participant.isCameraEnabled,
      isMicrophoneEnabled: participant.isMicrophoneEnabled,
    }),
  );
};
