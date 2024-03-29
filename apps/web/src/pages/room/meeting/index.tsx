import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import { useAppSelector } from "@/store";

import LoadingPage from "@/pages/loading";

import { toast } from "@/lib/ui/toast";
import { getAccessToken } from "@/lib/auth/accessToken";
import { connectToWebRTCRoom, disconnectFromRoom } from "@/lib/webrtc";

import { captureError } from "@/utils/error";

import { MeetingHour } from "./hour";
import { RoomLeft } from "../room-left";
import { MainControls } from "./main-controls";
import { DrawerControls } from "./drawer-controls";
import { UnathorizedRoom } from "../unauthorized";
import { ParticipantsGallery } from "./participants-gallery";

export const RoomMeeting = () => {
  const accessToken = getAccessToken();
  const room = useAppSelector((state) => state.room.room);

  const [connecting, setConnecting] = useState(true);
  const [connectionError, setConnectionError] = useState(false);

  useEffect(() => {
    if (!accessToken) return;

    setConnecting(true);

    async function connect() {
      try {
        await connectToWebRTCRoom(accessToken);
      } catch (error) {
        captureError(error);
        toast.error("Error at connecting to room");
        setConnectionError(true);
      } finally {
        setConnecting(false);
      }
    }

    connect();

    return () => {
      disconnectFromRoom();
    };
  }, [accessToken]);

  if (connecting) return <LoadingPage />;

  if (connectionError) return <UnathorizedRoom />;

  if (!room) return <RoomLeft />;

  return (
    <Box
      width="100%"
      height="100vh"
      boxSizing="border-box"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 2,
        backgroundColor: "#202124",
      }}
    >
      <ParticipantsGallery />
      <Box
        width="100%"
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 2fr 1fr",
          },
          gap: 2,
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
          alignItems="center"
          gap={2}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                lg: "flex",
              },
            }}
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <MeetingHour />
            <Box
              sx={{
                width: "1px",
                height: "18px",
                backgroundColor: "white",
              }}
            />
          </Box>
          <Typography color="white" fontSize="1.1rem" fontWeight={300}>
            {room.id}
          </Typography>
        </Box>
        <MainControls />
        <DrawerControls />
      </Box>
    </Box>
  );
};
