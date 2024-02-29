import { memo } from "react";
import { Box } from "@mui/material";

import { ParticipantsAccordion } from "./participants-accordion";

import { AddPeopleButton } from "../../modal/add-people";

export const PeopleSection = memo(() => {
  return (
    <Box>
      <AddPeopleButton />
      <Box display="grid" gap={3} paddingY={4}>
        <ParticipantsAccordion />
      </Box>
    </Box>
  );
});
