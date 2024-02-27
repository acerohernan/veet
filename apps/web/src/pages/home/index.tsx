import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import CallIcon from "@mui/icons-material/Call";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";

import { API } from "@/api";

import { captureError } from "@/utils/error";

const HomePage = () => {
  const navigate = useNavigate();

  const [createRoomLoading, setCreateRoomLoading] = useState(false);
  const [enterDemoRoomLoading, setEnterDemoRoomLoading] = useState(false);

  const createRoom = async () => {
    setCreateRoomLoading(true);
    try {
      const name = "Guest";
      const res = await API.room.createRoom({ name });
      if (!res.data) return;

      const { roomId, accessToken } = res.data;
      navigate(`/${roomId}?accessToken=${accessToken}`);
    } catch (err) {
      captureError(err);
    } finally {
      setCreateRoomLoading(false);
    }
  };

  const enterDemoRoom = async () => {
    setEnterDemoRoomLoading(true);
    try {
      const name = "Guest";
      const res = await API.room.getDemoCredentials({ name });
      if (!res.data) return;

      const { accessToken } = res.data;
      navigate(`/demo?accessToken=${accessToken}`);
    } catch (err) {
      captureError(err);
    } finally {
      setEnterDemoRoomLoading(false);
    }
  };

  return (
    <Box
      width="100%"
      height="100vh"
      sx={{
        display: {
          xs: "flex",
        },
        alignItems: "center",
      }}
    >
      <Box
        width="100%"
        margin="0px auto"
        padding={4}
        maxWidth={600}
        sx={{
          textAlign: {
            xs: "center",
            md: "start",
          },
        }}
      >
        <Typography variant="h3" marginBottom={3}>
          Video call and meetings for everyone
        </Typography>
        <Typography fontWeight={300} fontSize="1.125rem">
          Veet provides secure, easy-to-use video calls and meetings for everyone, on any device
        </Typography>
        <Box
          width="100%"
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
            },
            alignItems: {
              xs: "start",
              md: "center",
            },
            justifyContent: "center",
            marginTop: {
              xs: 3,
              md: 8,
            },
          }}
          gap={3}
        >
          <LoadingButton
            variant="contained"
            size="large"
            css={{ fontSize: "1rem", flexShrink: 0, fontWeight: 600, width: "100%" }}
            startIcon={<VideoCallOutlinedIcon />}
            onClick={createRoom}
            loading={createRoomLoading}
          >
            New meeting
          </LoadingButton>
          <LoadingButton
            variant="outlined"
            size="large"
            css={{ fontSize: "1rem", flexShrink: 0, fontWeight: 600, width: "100%" }}
            startIcon={<CallIcon />}
            onClick={enterDemoRoom}
            loading={enterDemoRoomLoading}
          >
            Enter demo meeting
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
