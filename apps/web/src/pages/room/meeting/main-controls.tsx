import { useState } from "react";

import { Box, Button, IconButton, Tooltip } from "@mui/material";

import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import CallEndIcon from "@mui/icons-material/CallEnd";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import VideocamOffOutlinedIcon from "@mui/icons-material/VideocamOffOutlined";
import PresentToAllOutlinedIcon from "@mui/icons-material/PresentToAllOutlined";

import { toast } from "@/lib/ui/toast";
import { disconnectFromRoom, getWebRTCRoom } from "@/lib/webrtc";

export const MainControls = () => {
  const [micOn, setMicOn] = useState(false);
  const [cameraOn, setCameraOn] = useState(false);
  const [screenShareOn, setScreenShareOn] = useState(false);

  const { localParticipant } = getWebRTCRoom();

  function toggleMicrophone() {
    setMicOn((prev) => !prev);
  }

  function toggleCamera() {
    try {
      localParticipant.setCameraEnabled(!cameraOn);
      setCameraOn((prev) => !prev);
    } catch (error) {
      toast.error("error at toggling camera");
    }
  }

  function toggleScreenShare() {
    setScreenShareOn((prev) => !prev);
  }

  async function leaveRoom() {
    try {
      disconnectFromRoom();
    } catch (error) {
      toast.error("Error at leaving to room");
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,

        justifyContent: "center",
      }}
    >
      <Tooltip title={`Turn ${micOn ? "on" : "off"} microphone`}>
        <IconButton color={micOn ? "on" : "off"} size="small" onClick={toggleMicrophone}>
          {micOn ? <MicIcon /> : <MicOffIcon />}
        </IconButton>
      </Tooltip>

      <Tooltip title={`Turn ${micOn ? "on" : "off"} camera`}>
        <IconButton color={cameraOn ? "on" : "off"} onClick={toggleCamera} size="small">
          {cameraOn ? <VideocamOutlinedIcon /> : <VideocamOffOutlinedIcon />}
        </IconButton>
      </Tooltip>
      <Tooltip title={screenShareOn ? "Stop presenting" : "Present now"}>
        <IconButton color={screenShareOn ? "active" : "on"} onClick={toggleScreenShare} size="small">
          <PresentToAllOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Button color="error" variant="contained" sx={{ borderRadius: "22px" }} onClick={leaveRoom}>
        <CallEndIcon />
      </Button>
    </Box>
  );
};
