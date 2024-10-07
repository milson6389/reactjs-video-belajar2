import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import KelasDetailHeader from "../components/kelas/KelasDetailHeader";
import Card from "../components/ui/Card";
import KelasDetailPackage from "../components/kelas/KelasDetailPackage";
import KelasParticipant from "../components/kelas/KelasParticipant";
import Footer from "../components/layout/Footer";
import KelasList from "../components/kelas/KelasList";
import KelasAccordion from "../components/kelas/KelasAccordion";

const ClassDetail = () => {
  const { id } = useParams();
  const allKelasData = useSelector((state) => state.course.classes);
  const kelasData = allKelasData.find((dt) => dt.id == id);
  const relatedKelasData = allKelasData.filter(
    (dt) => dt.category == kelasData.category
  );
  const materiKelas = useSelector((state) => state.course.classDetail);
  const classPackage = [
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
  ];

  return (
    <>
      <main className="m-5 p-5">
        <KelasDetailHeader data={kelasData} />
        <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-5 md:gap-10 w-full">
          <div className="w-full md:w-3/5">
            <Card className="mb-5">
              <h1 className="text-2xl font-bold">Deskripsi</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                provident consectetur perferendis earum ex accusamus tenetur
                magnam quod rerum, neque recusandae quisquam ut maxime ea est
                eos similique quasi quam minus, incidunt officia facilis vel!
                Deleniti asperiores accusantium magni facere eos cum totam!
                Labore, dolores eum soluta saepe unde consectetur cum architecto
                facilis amet nulla doloremque voluptatibus corrupti consequuntur
                officiis tempora ex nisi laborum laudantium? Dolor cupiditate
                doloremque, voluptatibus et accusantium libero perspiciatis!
                Suscipit delectus, repellendus quia architecto non ut accusamus
                eligendi. Id deleniti architecto eligendi dicta? Enim, hic eaque
                nisi inventore id accusantium rem? Autem veritatis ullam
                recusandae sapiente cumque suscipit ducimus consequuntur nobis
                iusto unde? Veritatis sequi rem consequatur iure repellat! Nisi,
                hic omnis? Fugiat neque cupiditate, ratione temporibus omnis
                quaerat autem ea. Officia magnam sit molestias rem aspernatur
                iusto. Neque repellendus atque qui accusamus quo, non odit
                laboriosam nisi repellat. Temporibus recusandae eligendi modi ex
                quos ipsum.
              </p>
            </Card>
            <Card className="mb-5">
              <h1 className="text-2xl font-bold">
                Belajar bersama Tutor Profesional
              </h1>
              <div className="flex flex-col md:flex-row items-center md:gap-5">
                <KelasParticipant data={kelasData} />
                <KelasParticipant data={kelasData} />
              </div>
            </Card>
            <Card className="mb-5">
              <h1 className="text-2xl font-bold">Kamu akan Mempelajari</h1>
              {materiKelas.map((mk) => {
                return <KelasAccordion key={mk.id} data={mk} />;
              })}
            </Card>
            <Card className="mb-5">
              <h1 className="text-2xl font-bold">Rating dan Review</h1>
              <div className="flex flex-col md:flex-row items-center md:gap-5">
                <KelasParticipant data={kelasData} rating={4} />
                <KelasParticipant data={kelasData} rating={2} />
              </div>
            </Card>
          </div>
          <Card className="w-full md:w-2/5">
            <KelasDetailPackage data={kelasData} packages={classPackage} />
          </Card>
        </div>
        <section className="my-3">
          <h1 className="text-2xl md:text-3xl font-bold">
            Video Pembelajaran Terkait Lainnya
          </h1>
          <p>Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!</p>
        </section>
        <KelasList data={relatedKelasData} />
      </main>
      <Footer />
    </>
  );
};

export default ClassDetail;
