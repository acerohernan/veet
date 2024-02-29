import { useMemo } from "react";
import { Box, IconButton } from "@mui/material";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

import { navigationActions } from "@/store/navigation";

import { DrawerSection } from "@/store/types";
import { useAppDispatch, useAppSelector } from "@/store";

interface DrawerControl {
  section: DrawerSection;
  activeIcon: React.ReactNode;
  inactiveIcon: React.ReactNode;
}

const controls: DrawerControl[] = [
  {
    section: DrawerSection.People,
    activeIcon: <PeopleAltIcon />,
    inactiveIcon: <PeopleAltOutlinedIcon />,
  },
];

export const DrawerControls = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "flex",
        },
        alignItems: "center",
        justifyContent: "end",
      }}
    >
      {controls.map((control) => (
        <Control control={control} key={`drawer-control-${control.section}`} />
      ))}
    </Box>
  );
};

const Control: React.FC<{ control: DrawerControl }> = ({ control: { section, activeIcon, inactiveIcon } }) => {
  const dispatch = useAppDispatch();

  const isDrawerOpen = useAppSelector((state) => state.navigation.isDrawerOpen);
  const drawerSection = useAppSelector((state) => state.navigation.drawerSection);

  const isActive = useMemo(() => drawerSection === section && isDrawerOpen, [isDrawerOpen, drawerSection, section]);

  return (
    <IconButton
      onClick={() =>
        isActive ? dispatch(navigationActions.closeDrawer()) : dispatch(navigationActions.openDrawer({ section }))
      }
      sx={{
        color: isActive ? "#8ab4f8" : "white",
        padding: "14px",
      }}
      key={`drawer-controls-${section}`}
    >
      {isActive ? activeIcon : inactiveIcon}
    </IconButton>
  );
};
