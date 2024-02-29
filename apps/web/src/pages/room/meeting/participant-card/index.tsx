import { Avatar, Box, Typography } from "@mui/material";

import MicOffIcon from "@mui/icons-material/MicOff";

export const ParticipantCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#3C4043",
        borderRadius: 2,
        display: "flex",
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
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
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
          H
        </Avatar>
      </Box>
      <Box>
        <Typography color="white" fontWeight={300}>
          Hernan Acero
        </Typography>
      </Box>
    </Box>
  );
};
