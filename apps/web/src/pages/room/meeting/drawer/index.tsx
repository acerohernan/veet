import { useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { DrawerSection } from "@/store/types";
import { navigationActions } from "@/store/navigation";
import { useAppDispatch, useAppSelector } from "@/store";

import { PeopleSection } from "./people-section";

export const MeetingDrawer = () => {
  const [maxHeight, setMaxHeight] = useState(window.innerHeight - 100);
  const dispatch = useAppDispatch();

  const isDrawerOpen = useAppSelector((state) => state.navigation.isDrawerOpen);
  const drawerSection = useAppSelector((state) => state.navigation.drawerSection);
  useEffect(() => {
    const reCalculateMaxHeight = () => setMaxHeight(window.innerHeight - 100);

    window.addEventListener("resize", reCalculateMaxHeight);
    return () => {
      window.removeEventListener("resize", reCalculateMaxHeight);
    };
  }, []);

  let title = "";
  let section = <></>;

  switch (drawerSection) {
    case DrawerSection.People:
      title = "People";
      section = <PeopleSection />;
      break;
  }

  return (
    <Box
      className="custom-scroll"
      width="100%"
      maxWidth="380px"
      height="100%"
      position="fixed"
      paddingY={1}
      paddingX={2}
      top={16}
      right={0}
      maxHeight={maxHeight}
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
        overflowY: "auto",
        overflowX: "hidden",
        transition: "transform 0.3s ease-in-out",
        transform: isDrawerOpen ? "translateX(0%)" : "translateX(100%)",
        zIndex: 10,
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" fontSize="1.125rem" marginLeft={1}>
          {title}
        </Typography>
        <IconButton onClick={() => dispatch(navigationActions.closeDrawer())}>
          <CloseIcon />
        </IconButton>
      </Box>
      {section}
    </Box>
  );
};
