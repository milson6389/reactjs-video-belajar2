import { create } from "zustand";

import DataWOP from "../data/wop.json";

const trxStore = (set, get) => ({
  wop: DataWOP,
  progress: 1,
  trxHistory: [],
  selectedWOP: {
    code: "",
    admin: 0,
  },
  updateProgress: (progressVal) =>
    set((state) => ({ progress: state.progress + progressVal })),
  setSelectedWOP: (wopObj) => {
    set((state) => ({
      selectedWOP: {
        ...state.selectedWOP,
        code: wopObj.code,
        admin: wopObj.admin,
      },
    }));
  },
});

const useTrxStore = create(trxStore);
export default useTrxStore;
