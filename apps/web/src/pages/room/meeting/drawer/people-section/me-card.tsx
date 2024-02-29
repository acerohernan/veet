import { Avatar, Box, IconButton, Typography } from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";

export const MeCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar>H</Avatar>
        <Typography fontSize="0.875rem">Hernan (You)</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        {/* <GuestMicVisualizer /> */}
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
