import { Track } from "livekit-client";
import React, { useEffect, useRef } from "react";
import { Avatar, Box, Typography } from "@mui/material";

import MicOffIcon from "@mui/icons-material/MicOff";

import { useAppSelector } from "@/store";
import { getWebRTCRoom } from "@/lib/webrtc";

interface Props {
  id: string;
}

export const ParticipantCard: React.FC<Props> = ({ id }) => {
  const participant = useAppSelector((state) => state.room.participants.entities[id]);
  const room = getWebRTCRoom();
  const webRTCParticipant = room.getParticipantByIdentity(participant.identity);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!webRTCParticipant || !videoRef.current) return;

    const publication = webRTCParticipant.getTrackPublication(Track.Source.Camera);

    if (!publication || !publication.isSubscribed) return;

    if (participant.isCameraEnabled) {
      publication.videoTrack?.attach(videoRef.current);
    } else {
      publication.videoTrack?.detach(videoRef.current);
    }
  }, [participant.isCameraEnabled, webRTCParticipant, videoRef]);

  return (
    <Box
      sx={{
        backgroundColor: "#3C4043",
        borderRadius: 2,
        display: "flex",
        position: "relative",
        flexDirection: "column",
        padding: 2,
        /* wrap */
        flex: 1,
        flexBasis: "350px",
        aspectRatio: "12 / 9",
        maxWidth: "100%",
        maxHeight: "100%",
        margin: "auto 0px",
        height: "auto",
      }}
    >
      <video
        ref={videoRef}
        style={{
          borderRadius: "inherit",
          position: "absolute",
          display: participant.isCameraEnabled ? "block" : "none",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          objectFit: "cover",
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end", zIndex: 2 }}>
        <Box
          padding="4px"
          sx={{
            background: "#34373A",
            color: "white",
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MicOffIcon sx={{ fontSize: "1.2rem" }} />
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          sx={{
            width: "100px",
            height: "auto",
            aspectRatio: "1 / 1",
            fontSize: "3rem",
          }}
          variant="circular"
        >
          {participant.name.slice(0, 1).toUpperCase()}
        </Avatar>
      </Box>
      <Box sx={{ zIndex: 2 }}>
        <Typography color="white" fontWeight={300}>
          {participant.name}
        </Typography>
      </Box>
    </Box>
  );
};
