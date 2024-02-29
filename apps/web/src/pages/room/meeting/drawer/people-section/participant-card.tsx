import { memo } from "react";
import { Avatar, Box, IconButton, Typography } from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Props {}

export const ParticipantCard: React.FC<Props> = memo(() => {
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
        <Typography fontSize="0.875rem">Hernan</Typography>
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
});
