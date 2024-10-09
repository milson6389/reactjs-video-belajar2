import { create } from "zustand";

import DataKelas from "../data/kelas.json";
import DataKelasDetail from "../data/kelasMaterials.json";

const courseStore = (set, get) => ({
  paidCourse: [],
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
  filteredClass: (category) => {
    const courses = get().classes;
    if (category !== "") {
      const filtered = courses.filter((c) => c.category == category);
      set({ classes: filtered });
    }
  },
  getPaidClassList: (arrKelasId) => {
    const allClasses = get().classes;
    const temp = allClasses.filter((x) => arrKelasId.includes(Number(x.id)));
    set((state) => ({ paidCourse: [...state.paidCourse, ...temp] }));
  },
  resetFilter: () => set({ classes: DataKelas }),
});

const useCourseStore = create(courseStore);
export default useCourseStore;
