import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import KelasDetailHeader from "../components/kelas/KelasDetailHeader";

const ClassDetail = () => {
  const { id } = useParams();
  const kelasData = useSelector((state) => state.course.classes).find(
    (dt) => dt.id == id
  );
  const materiKelas = useSelector((state) => state.course.classDetail);

  return (
    <>
      <main className="m-5 p-5">
        <KelasDetailHeader data={kelasData} />
      </main>
    </>
  );
};

export default ClassDetail;
