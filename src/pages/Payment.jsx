import { useNavigate, useParams } from "react-router-dom";
import KelasDetailPackage from "../components/kelas/KelasDetailPackage";
import KelasPaymentProgress from "../components/kelas/KelasPaymentProgress";
import Card from "../components/ui/Card";
import useCourseStore from "../store/courseStore";
import useTrxStore from "../store/trxStore";

const Payment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const allTrx = useTrxStore((state) => state.trxHistory);
  const currentTrx = allTrx.find((x) => x.id == id);
  const kelasData = useCourseStore((state) => state.classes).find(
    (x) => x.id == currentTrx.kelas_id
  );
  const classPackage = useCourseStore((state) => state.classPackage);
  const updateStep = useTrxStore((state) => state.updateProgress);
  const updateTrx = useTrxStore((state) => state.updateTrx);
  const isPending = useTrxStore((state) => state.selectedWOP.isMaintenance);

  const currencyFormatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const checkoutHandler = () => {
    const status = isPending ? "INP" : "DONE";
    updateTrx(id, status);
    updateStep(1);
    navigate(`/status/${id}`);
  };

  return (
    <section>
      <KelasPaymentProgress />
      <main className="m-5 p-5">
        <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-5 md:gap-10 w-full">
          <div className="w-full md:w-3/5">
            <Card className="mb-5">
              <h1 className="font-bold text-xl mb-3">Ringkasan Pesanan</h1>
              <div className="flex justify-between items-start text-slate-500 mb-3 text-sm md:text-base">
                <p>Video Learning: {kelasData.title}</p>
                <p>{currencyFormatter.format(currentTrx.price)}</p>
              </div>
              <div className="flex justify-between items-start text-slate-500 mb-3 text-sm md:text-base">
                <p>Biaya Admin</p>
                <p>{currencyFormatter.format(currentTrx.admin)}</p>
              </div>
              <hr />
              <div className="flex justify-between items-start my-3 font-bold">
                <p>Total Pembayaran</p>
                <p className="text-primary ">
                  {currencyFormatter.format(
                    currentTrx.price + currentTrx.admin
                  )}
                </p>
              </div>
              <button
                onClick={checkoutHandler}
                className="w-full bg-primary text-white rounded-md py-1"
              >
                Beli Sekarang
              </button>
            </Card>
          </div>
          <Card className="w-full md:w-2/5">
            <KelasDetailPackage
              data={kelasData}
              packages={classPackage}
              isReadOnly={true}
            />
          </Card>
        </div>
      </main>
    </section>
  );
};

export default Payment;
