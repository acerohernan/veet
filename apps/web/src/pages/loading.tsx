import { Box, CircularProgress } from "@mui/material";

const LoadingPage = () => {
  return (
    <Box height="100vh" width="100%" display="flex" alignItems="center" justifyContent="center">
      <CircularProgress />
    </Box>
  );
};

export default LoadingPage;
