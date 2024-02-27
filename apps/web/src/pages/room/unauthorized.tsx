import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

export const UnathorizedRoom = () => {
  const navigate = useNavigate();

  return (
    <Box
      width="100%"
      height="100vh"
      textAlign="center"
      padding={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Typography variant="h4" fontSize="2.25rem" marginTop={4}>
          Check your meeting code
        </Typography>
        <Typography margin="auto" marginTop={4} maxWidth="450px">
          Make sure you entered the correct meeting in the URL, for example: {import.meta.env.VITE_URL}/
          <strong>xxx-yyyy-zzz</strong>
        </Typography>
        <Button
          variant="contained"
          sx={{ marginTop: 10, fontSize: "0.9rem", fontWeight: 600 }}
          onClick={() => navigate("/")}
        >
          Return to home screen
        </Button>
      </Box>
    </Box>
  );
};
