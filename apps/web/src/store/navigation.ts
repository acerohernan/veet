import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DrawerSection } from "./types";

interface INavigationState {
  // map of roomId -> accessToken
  tokens: Record<string, string>;

  isDrawerOpen: boolean;
  drawerSection: string;
}

const initialState: INavigationState = {
  tokens: JSON.parse(sessionStorage.getItem("tokens") || "{}"),

  isDrawerOpen: false,
  drawerSection: DrawerSection.People,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    storeToken: (state, action: PayloadAction<{ roomId: string; token: string }>) => {
      const { roomId, token } = action.payload;
      state.tokens = { ...state.tokens, [roomId]: token };
    },
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
