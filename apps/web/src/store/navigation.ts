import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DrawerSection } from "./types";

interface INavigationState {
  isDrawerOpen: boolean;
  drawerSection: string;
}

const initialState: INavigationState = {
  isDrawerOpen: false,
  drawerSection: DrawerSection.People,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    openDrawer: (state, action: PayloadAction<{ section: DrawerSection }>) => {
      state.isDrawerOpen = true;
      state.drawerSection = action.payload.section;
    },
    closeDrawer: (state) => {
      state.isDrawerOpen = false;
    },
  },
});

export const navigationReducer = navigationSlice.reducer;
export const navigationActions = navigationSlice.actions;
