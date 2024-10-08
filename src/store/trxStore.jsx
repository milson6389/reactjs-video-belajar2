import { create } from "zustand";

import DataWOP from "../data/wop.json";

const trxStore = (set, get) => ({
  wop: DataWOP,
  progress: 1,
  trxHistory: localStorage.getItem("trx")
    ? JSON.parse(localStorage.getItem("trx"))
    : [],
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
  addTrx: (trxObj) => {
    const tgl = new Date().getDate().toString();
    const month = (new Date().getMonth() + 1).toString();
    const year = new Date().getFullYear().toString();
    const code = tgl + month + year;

    const newTrx = {
      id: trxObj.id,
      kelas_id: trxObj.kelas_id,
      email: trxObj.email,
      trxNo: `INV/${code}`,
      trxDt: new Date().toLocaleString(),
      paidDt: "",
      wopCode: trxObj.wopCode,
      price: trxObj.price,
      admin: trxObj.admin,
      va_no: trxObj.va_no,
      status: "PENDING",
    };

    const existingArray = get().trxHistory;
    if (existingArray.length == 0) {
      const temp = [];
      temp.push(newTrx);
      localStorage.setItem("trx", JSON.stringify(temp));

      set((state) => ({
        trxHistory: [...state.trxHistory, ...temp],
      }));
    } else {
      const temp2 = JSON.parse(localStorage.getItem("trx"));
      temp2.push(newTrx);
      localStorage.setItem("trx", JSON.stringify(temp2));

      set((state) => ({
        trxHistory: [...state.trxHistory, newTrx],
      }));
    }
  },
  updateTrx: (trxObj) => {
    const trxes = get().trxHistory;
    const updatedTrx = trxes?.map((trx) => {
      if (trx.id == trxObj.id) {
        return {
          ...trx,
          ...trxObj,
          paidDt: new Date().toLocaleString(),
        };
      } else {
        return trx;
      }
    });
    localStorage.setItem("trx", JSON.stringify(updatedTrx));
    set((state) => ({
      trxHistory: updatedTrx,
    }));
  },
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
