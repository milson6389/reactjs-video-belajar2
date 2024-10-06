import CardImg from "../../assets/img/card-1.png";
import CardProfile from "../../assets/img/profile.png";

const KelasListItem = ({ kelas }) => {
  return (
    <div className="border rounded-md p-3 flex flex-col gap-2 hover:scale-105">
      <div className="flex md:flex-col justify-between items-start gap-2">
        <img
          src={CardImg}
          alt={kelas.title}
          className="w-1/3 h-full md:w-full"
        />
        <div className="flex flex-col gap-3">
          <h1 className="font-bold md:text-2xl">{kelas.title}</h1>
          <p className="hidden md:block">{kelas.desc}</p>
          <div className="flex items-center justify-start gap-3">
            <img
              src={CardProfile}
              alt={kelas.lecturer_name}
              className="w-[50px] h-[50px] border rounded-md bg-cream"
            />
            <div className="flex flex-col">
              <p className="font-bold text-sm">{kelas.lecturer_name}</p>
              <p className="text-sm">{kelas.lecturer_title}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {Array.from(Array(5), (e, i) => {
            return (
              <i
                key={i}
                className={`fa-solid fa-star ${
                  kelas.rating > i ? "text-warning" : "text-slate-500"
                } `}
              ></i>
            );
          })}
          <p className="underline">{kelas.rating} (86)</p>
        </div>
        <span className="text-primary font-bold">{kelas.price}</span>
      </div>
    </div>
  );
};

export default KelasListItem;
