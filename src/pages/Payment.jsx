import { useNavigate, useParams } from "react-router-dom";
import KelasDetailPackage from "../components/kelas/KelasDetailPackage";
import KelasPaymentProgress from "../components/kelas/KelasPaymentProgress";
import Card from "../components/ui/Card";
import useCourseStore from "../store/courseStore";
import useTrxStore from "../store/trxStore";
import TrxGuideAccordion from "../components/trx/TrxGuideAccordion";
import { useEffect } from "react";

const Payment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const allTrx = useTrxStore((state) => state.trxHistory);
  const currentTrx = allTrx.find((x) => x.id == id);
  const kelasData = useCourseStore((state) => state.classes).find(
    (x) => x.id == currentTrx.kelas_id
  );
  const setWopInfo = useTrxStore((state) => state.getWOPDetailByCode);
  const dataPaymentGuide = useTrxStore((state) => state.paymentStepGuide);
  const classPackage = useCourseStore((state) => state.classPackage);
  const updateTrx = useTrxStore((state) => state.updateTrx);
  const deleteTrx = useTrxStore((state) => state.deleteTrx);
  const isPending = useTrxStore((state) => state.selectedWOP.isMaintenance);

  useEffect(() => {
    setWopInfo(currentTrx.wopCode);
  }, [currentTrx.wopCode]);

  const currentTrxWopInfo = useTrxStore((state) => state.selectedWOP);

  const currencyFormatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const checkoutHandler = () => {
    const status = isPending ? "INP" : "DONE";
    const trx = {
      id: id,
      status: status,
    };
    updateTrx(trx);
    navigate(`/status/${id}`);
  };

  const rollbackHandler = () => {
    deleteTrx(id);
    navigate(`/checkout/${kelasData.id}`);
  };

  return (
    <section>
      <KelasPaymentProgress />
      <main className="m-5 p-5">
        <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-5 md:gap-10 w-full">
          <div className="w-full md:w-3/5">
            <Card className="mb-5">
              <section>
                <h1 className="font-bold text-xl mb-3">Metode Pembayaran</h1>
                <Card className="mb-5 flex flex-col justify-center items-center gap-3">
                  <img
                    className="w-[50px]"
                    src={currentTrxWopInfo.img}
                    alt={currentTrxWopInfo.title}
                  />
                  <p className="font-bold">
                    Bayar melalui {currentTrxWopInfo.title}
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="text-slate-500">{currentTrx.va_no}</p>
                    <button className="text-red">Salin</button>
                  </div>
                </Card>
              </section>
              <section>
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
              </section>
              <div className="flex flex-col md:flex-row items-center gap-3">
                <button
                  disabled={currentTrx.status == "DONE"}
                  onClick={rollbackHandler}
                  className="w-full text-sm lg:text-base bg-white border border-primary text-primary rounded-md py-1"
                >
                  Ganti Metode Pembayaran
                </button>
                <button
                  disabled={currentTrx.status == "DONE"}
                  onClick={checkoutHandler}
                  className="w-full text-sm lg:text-base bg-primary text-white rounded-md py-1"
                >
                  Beli Sekarang
                </button>
              </div>
            </Card>
            <Card className="mb-5">
              <h1 className="font-bold text-xl mb-3">Tata Cara Pembayaran</h1>
              {dataPaymentGuide.map((data) => {
                return <TrxGuideAccordion key={data.id} data={data} />;
              })}
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
