import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DrawerSection } from "./types";

interface IRoomState {
  // map of roomId -> accessToken
  tokens: Record<string, string>;

  isDrawerOpen: boolean;
  drawerSection: string;
}

const initialState: IRoomState = {
  tokens: JSON.parse(sessionStorage.getItem("tokens") || "{}"),
  isDrawerOpen: false,
  drawerSection: DrawerSection.People,
};

const roomSlice = createSlice({
  name: "room",
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

export const roomReducer = roomSlice.reducer;
export const roomActions = roomSlice.actions;
