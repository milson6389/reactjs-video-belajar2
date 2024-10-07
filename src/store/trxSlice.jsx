import DataWOP from "../data/wop.json";

import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  wop: DataWOP,
  trxHistory: [],
  progress: 1,
  selectedWOP: {
    code: "",
    admin: 0,
  },
};

export const trxSlice = createSlice({
  name: "trx",
  initialState,
  reducers: {
    updateProgress: (state, action) => {
      state.progress = state.progress + action.payload.step;
    },
    setSelectedWOP: (state, action) => {
      state.selectedWOP = {
        code: action.payload.code,
        admin: action.payload.admin,
      };
    },
    addTrx: (state, action) => {},
  },
});

export const { updateProgress, setSelectedWOP, addTrx } = trxSlice.actions;
export default trxSlice.reducer;
