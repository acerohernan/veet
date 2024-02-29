import { Avatar, Box, IconButton, Typography } from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useAppSelector } from "@/store";

interface Props {
  id: string;
}

export const ParticipantCard: React.FC<Props> = ({ id }) => {
  const participant = useAppSelector((state) => state.room.participants.entities[id]);

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
        <Avatar>{participant.name.slice(0, 1).toUpperCase()}</Avatar>
        <Typography fontSize="0.875rem">{participant.name}</Typography>
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
