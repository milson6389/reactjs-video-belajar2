import { useState } from "react";
import Card from "../ui/Card";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedWOP } from "../../store/trxSlice";

const KelasWOPAccordion = ({ data }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const setIsOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const setSelectedIdHandler = (code, admin) => {
    dispatch(setSelectedWOP({ code, admin }));
  };

  const selectedWOP = useSelector((state) => state.trx.selectedWOP).code;

  return (
    <>
      <div className="flex justify-between items-center my-2">
        <h1 className="text-black font-bold">{data.title}</h1>
        <button onClick={setIsOpenHandler}>
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </button>
      </div>
      <ul>
        {isOpen &&
          data.sub.map((dt, id) => {
            return (
              <li
                key={id}
                onClick={() => setSelectedIdHandler(dt.code, dt.admin)}
              >
                <Card className="flex justify-between items-center my-1">
                  <span className="flex items-center gap-5 font-bold">
                    <img
                      src={dt.img}
                      alt={dt.title}
                      className="w-[50px] h-12 object-contain"
                    />
                    {dt.title}
                  </span>
                  {selectedWOP == dt.code && (
                    <i className="fa-regular fa-circle-check text-red"></i>
                  )}
                </Card>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default KelasWOPAccordion;
