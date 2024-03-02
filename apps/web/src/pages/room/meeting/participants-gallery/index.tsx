import { Box } from "@mui/material";

import { useAppSelector } from "@/store";

import { MeetingDrawer } from "../drawer";
import { RemoteParticipantCard } from "./remote-card";
import { LocalParticipantCard } from "./local-card";

export const ParticipantsGallery = () => {
  const participantsIds = useAppSelector((state) => state.room.participants.ids);

  return (
    <Box
      className="custom-scroll"
      sx={{
        flex: 1,
        marginBottom: 2,
        overflowY: "auto",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          height: "100%",
        }}
      >
        <LocalParticipantCard />
        {participantsIds.map((id) => (
          <RemoteParticipantCard id={id} key={id} />
        ))}
      </Box>
      <MeetingDrawer />
    </Box>
  );
};
