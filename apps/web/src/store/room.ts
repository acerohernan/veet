import { EntityState, PayloadAction, Update, createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { LocalParticipant, RemoteParticipant, Room } from "./types";

interface IRoomState {
  room: Room | null;
  localParticipant: LocalParticipant | null;
  participants: EntityState<RemoteParticipant, string>;
}

const participantAdapter = createEntityAdapter<RemoteParticipant>();

const initialState: IRoomState = {
  room: null,
  localParticipant: null,
  participants: participantAdapter.getInitialState(),
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRoom: (state, action: PayloadAction<Room | null>) => {
      state.room = action.payload;
    },
    setLocalParticipant: (state, action: PayloadAction<LocalParticipant | null>) => {
      state.localParticipant = action.payload;
    },
    updateLocalParticipant: (state, action: PayloadAction<Partial<LocalParticipant>>) => {
      if (!state.localParticipant) return;
      state.localParticipant = { ...state.localParticipant, ...action.payload };
    },
    setParticipants: (state, action: PayloadAction<RemoteParticipant[]>) => {
      state.participants = participantAdapter.setMany(state.participants, action);
    },
    addParticipant: (state, action: PayloadAction<RemoteParticipant>) => {
      state.participants = participantAdapter.addOne(state.participants, action);
    },
    removeParticipant: (state, action: PayloadAction<string>) => {
      state.participants = participantAdapter.removeOne(state.participants, action);
    },
    updateParticipant: (state, action: PayloadAction<Update<RemoteParticipant, string>>) => {
      state.participants = participantAdapter.updateOne(state.participants, action);
    },
  },
});

export const roomReducer = roomSlice.reducer;
export const roomActions = roomSlice.actions;
