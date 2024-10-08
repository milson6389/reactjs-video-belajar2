import KelasPaymentProgress from "../components/kelas/KelasPaymentProgress";
import Card from "../components/ui/Card";
import Success from "../assets/img/payment_success.png";
import Pending from "../assets/img/payment_inp.png";
import useTrxStore from "../store/trxStore";

const Status = () => {
  const isPending = useTrxStore((state) => state.selectedWOP.isMaintenance);
  return (
    <section>
      <KelasPaymentProgress />
      <main className="m-5 p-5">
        <Card className="flex flex-col items-center justify-center gap-5 p-5">
          {isPending ? (
            <>
              <img src={Pending} alt="pending" />
              <h1 className="font-bold text-2xl">Pembayaran Tertunda!</h1>
            </>
          ) : (
            <>
              <img src={Success} alt="success" />
              <h1 className="font-bold text-2xl">Pembayaran Berhasil!</h1>
            </>
          )}
          <p>
            Silahkan cek Email kamu untuk informasi lebih lanjut. Hubungi Kami
            jika ada kendala.
          </p>
          <button className="bg-primary text-white rounded-md py-2 w-full md:w-1/2">
            Lihat Detail Pesanan
          </button>
        </Card>
      </main>
    </section>
  );
};

export default Status;
