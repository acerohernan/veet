import { Avatar, Box, IconButton, Typography } from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useAppSelector } from "@/store";

export const MeCard = () => {
  const me = useAppSelector((state) => state.room.localParticipant);

  if (!me) return;

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
        <Avatar>{me.name.slice(0, 1).toUpperCase()}</Avatar>
        <Typography fontSize="0.875rem">{me.name} (You)</Typography>
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
