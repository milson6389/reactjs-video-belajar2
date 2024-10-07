import KelasPaymentProgress from "../components/kelas/KelasPaymentProgress";
import Card from "../components/ui/Card";
import Success from "../assets/img/payment_success.png";

const Status = () => {
  return (
    <section>
      <KelasPaymentProgress />
      <main className="m-5 p-5">
        <Card className="flex flex-col items-center justify-center gap-5 p-5">
          <img src={Success} alt="success" />
          <h1 className="font-bold text-2xl">Pembayaran Berhasil!</h1>
          <p>
            Silahkan cek email kamu untuk informasi lebih lanjut. Hubungi Kami
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
