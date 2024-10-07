import { useSelector } from "react-redux";

const KelasPaymentProgress = () => {
  const progressStep = useSelector((state) => state.trx.progress);

  return (
    <div className="relative flex justify-between items-center mx-2 my-3">
      <span className="text-primary mx-2">
        {progressStep >= 2 ? (
          <i className="fa-regular fa-circle-check mx-1"></i>
        ) : (
          <i className="fa-regular fa-circle-dot mx-1"></i>
        )}
        Pilih Metode
      </span>

      <div className="flex-grow border-t border-gray-400"></div>
      <span
        className={`mx-1 ${
          progressStep > 1 ? "text-primary" : "text-slate-600"
        }`}
      >
        {progressStep >= 3 ? (
          <i className="fa-regular fa-circle-check mx-1"></i>
        ) : (
          <i className="fa-regular fa-circle-dot mx-1"></i>
        )}
        Bayar
      </span>

      <div className="flex-grow border-t border-gray-400"></div>
      <span
        className={`mx-1 ${
          progressStep > 2 ? "text-primary" : "text-slate-600"
        }`}
      >
        <i className="fa-regular fa-circle-dot mx-1"></i>
        Selesai
      </span>
    </div>
  );
};

export default KelasPaymentProgress;
