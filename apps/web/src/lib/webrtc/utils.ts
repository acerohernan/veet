import type { Participant as LivekitParticipant } from "livekit-client";

import type { Participant } from "@/store/types";

export const parseLivekitParticipant = (participant: LivekitParticipant): Participant => {
  return {
    id: participant.sid,
    identity: participant.identity,
    isCameraEnabled: participant.isCameraEnabled,
    name: participant.name!,
    isMicrophoneEnabled: participant.isMicrophoneEnabled,
  };
};
