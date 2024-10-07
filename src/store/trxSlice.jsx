import DataWOP from "../data/wop.json";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wop: DataWOP,
  trxHistory: [],
  progress: 1,
};

export const trxSlice = createSlice({
  name: "trx",
  initialState,
  reducers: {
    updateProgress: (state, action) => {
      state.progress = state.progress + action.payload.step;
    },
  },
});

export const { updateProgress } = trxSlice.actions;
export default trxSlice.reducer;
