import DataKelas from "../data/kelas.json";
import DataKelasDetail from "../data/kelasMaterials.json";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  classes: DataKelas,
  classDetail: DataKelasDetail,
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    filteredCourse: (state, action) => {
      state.classes = DataKelas;
      if (action.payload.ctg !== "") {
        state.classes = state.classes.filter(
          (cls) => cls.category == action.payload.ctg
        );
      }
    },
  },
});

export const { filteredCourse } = courseSlice.actions;
export default courseSlice.reducer;
