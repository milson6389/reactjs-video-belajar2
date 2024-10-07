import DataKelas from "../data/kelas.json";
import DataKelasDetail from "../data/kelasMaterials.json";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  classes: DataKelas,
  classDetail: DataKelasDetail,
  classPackage: [
    {
      id: 1,
      content: (
        <>
          <i className="fa-regular fa-file"></i>
          Ujian Akhir
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <i className="fa-solid fa-video"></i>
          49 Video
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <i className="fa-regular fa-file-word"></i>7 Dokumen
        </>
      ),
    },
    {
      id: 4,
      content: (
        <>
          <i className="fa-regular fa-newspaper"></i>
          Sertifikat
        </>
      ),
    },
    {
      id: 5,
      content: (
        <>
          <i className="fa-regular fa-pen-to-square"></i>
          Pretest
        </>
      ),
    },
  ],
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
