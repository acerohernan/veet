import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

import { useAppSelector } from "@/store";

import { toast } from "@/lib/ui/toast";
import { connectToWebRTCRoom } from "@/lib/webrtc";

import { captureError } from "@/utils/error";

export const RoomLeft = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const accessToken = useAppSelector((state) => state.navigation.tokens[roomId ?? ""]);

  const [loading, setLoading] = useState(false);

  async function attempRejoin() {
    setLoading(true);
    try {
      await connectToWebRTCRoom(accessToken);
    } catch (error) {
      captureError(error);
      toast.error("Error at re-joining room");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      padding={3}
    >
      <Box>
        <Typography variant="h4" fontSize="2.25rem" marginTop={4}>
          You left the meeting
        </Typography>
        <Box display="flex" gap={1} alignItems="center" justifyContent="center" marginTop={6}>
          <LoadingButton
            variant="outlined"
            sx={{ fontSize: "0.9rem", fontWeight: 600 }}
            onClick={attempRejoin}
            loading={loading}
          >
            Rejoin
          </LoadingButton>
          <Button variant="contained" sx={{ fontSize: "0.9rem", fontWeight: 600 }} onClick={() => navigate("/")}>
            Return to home screen
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
