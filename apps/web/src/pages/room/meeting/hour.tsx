import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

const getCurrentTime = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export const MeetingHour = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime);

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(getCurrentTime), 10 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Typography color="white" fontSize="1.1rem" fontWeight={300}>
      {currentTime}
    </Typography>
  );
};
