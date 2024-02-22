import { Box, Button, Typography } from "@mui/material";

import CallIcon from "@mui/icons-material/Call";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";

export const HomePage = () => {
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
          <Button
            variant="contained"
            size="large"
            css={{ fontSize: "1rem", flexShrink: 0, fontWeight: 600, width: "100%" }}
            startIcon={<VideoCallOutlinedIcon />}
          >
            New meeting
          </Button>
          <Button
            variant="outlined"
            size="large"
            css={{ fontSize: "1rem", flexShrink: 0, fontWeight: 600, width: "100%" }}
            startIcon={<CallIcon />}
          >
            Enter demo meeting
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
