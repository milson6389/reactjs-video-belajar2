import { create } from "zustand";

import DataWOP from "../data/wop.json";

const trxStore = (set, get) => ({
  wop: DataWOP,
  progress: 1,
  trxHistory: [],
  selectedWOP: {
    title: "",
    code: "",
    va_code: "",
    admin: 0,
    img: "",
    isMaintenance: false,
  },
  updateProgress: (progressVal) =>
    set((state) => ({ progress: state.progress + progressVal })),
  setSelectedWOP: (wopObj) => {
    set(() => ({ selectedWOP: wopObj }));
  },
  resetTrx: () => {
    set(() => ({
      selectedWOP: {
        title: "",
        code: "",
        va_code: "",
        admin: 0,
        img: "",
        isMaintenance: false,
      },
    }));
  },
});

const useTrxStore = create(trxStore);
export default useTrxStore;
