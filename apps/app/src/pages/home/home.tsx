import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";

export const HomePage = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      sx={{
        display: "flex",
        alignItems: {
          xs: "center",
          md: "center",
        },
      }}
    >
      <Box textAlign="center" width="100%" padding={4} maxWidth={700} margin="0px auto">
        <Typography variant="h3" marginBottom={3}>
          Premium video meetings. Now free for everyone
        </Typography>
        <Typography fontWeight={300} fontSize="1.125rem">
          We re-engineered the service we built for secure bussiness meetings, to make it free and avaliable for all.
        </Typography>
        <Box
          width="100%"
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
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
            css={{ fontSize: "1rem", flexShrink: 0, fontWeight: 600 }}
            startIcon={<VideoCallOutlinedIcon />}
          >
            New meeting
          </Button>
          <Box width="100%" display="flex" gap={1}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Enter a code or link"
              size="medium"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyboardIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button size="large" css={{ fontSize: "1rem" }} disabled>
              Join
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
