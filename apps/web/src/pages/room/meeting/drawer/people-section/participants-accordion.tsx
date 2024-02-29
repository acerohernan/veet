import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { MeCard } from "./me-card";

export const ParticipantsAccordion = () => {
  return (
    <Box>
      <Typography fontSize="0.75rem" fontWeight="600" marginBottom={1} color="#5f6368" letterSpacing={0.8}>
        IN MEETING
      </Typography>
      <Accordion defaultExpanded elevation={0} sx={{ border: "1px solid #DADCE0" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="participants-accordion-content"
          id="participants-accordion-header"
          sx={{
            fontSize: "0.875rem",
          }}
        >
          Participants
        </AccordionSummary>
        <AccordionDetails
          sx={{
            borderTop: "1px solid #DADCE0",
          }}
        >
          <Box marginTop={1} display="grid" gap={3}>
            <MeCard />
            {/* {participants.map((p) => (
              <ParticipantCard participant={p} key={p.id} />
            ))} */}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
