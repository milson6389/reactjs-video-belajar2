import { Link, useNavigate } from "react-router-dom";
import Google from "../assets/img/google_icon.webp";
import Indonesia from "../assets/img/Indonesia_Flag.png";
import Singapore from "../assets/img/Singapore_Flag.png";
import { useRef, useState } from "react";

const Register = () => {
  const tempPhoneData = [
    {
      code: "+62",
      country: "Indonesia",
      flag: Indonesia,
    },
    {
      code: "+65",
      country: "Singapore",
      flag: Singapore,
    },
  ];

  const [toggleShow, setToggleShow] = useState(false);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidPassword2, setIsValidPassword2] = useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [showDropdown, setShowDropDown] = useState(false);
  const [ddlVal, setDdlVal] = useState(tempPhoneData[0]);

  const namaInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();
  const passwordInput = useRef();
  const password2Input = useRef();
  const navigate = useNavigate();

  const setToggleShowHandler = (e) => {
    e.preventDefault();
    setToggleShow(!toggleShow);
  };

  const btnPhoneHandler = (e) => {
    e.preventDefault();
    setShowDropDown(!showDropdown);
  };

  const selectedPhoneHandler = (e, data) => {
    e.preventDefault();
    setDdlVal(data);
    setShowDropDown(false);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setIsValidName(true);
    setIsValidEmail(true);
    setIsValidPhone(true);
    setIsValidPassword(true);
    setIsPasswordMatch(true);

    const nameVal = namaInput.current.value.trim();
    const emailVal = emailInput.current.value.trim();
    const phoneVal = phoneInput.current.value;
    const passVal = passwordInput.current.value.trim();
    const pass2Val = password2Input.current.value.trim();

    if (
      nameVal !== "" &&
      emailVal !== "" &&
      !isNaN(phoneVal) &&
      passVal !== "" &&
      pass2Val == passVal
    ) {
      const tempUser = {
        uid: +new Date(),
        nama: nameVal,
        email: emailVal,
        phone: `${ddlVal.code}${phoneVal}`,
      };
      localStorage.setItem("user", JSON.stringify(tempUser));
      navigate("/");
    } else {
      if (nameVal == "") {
        setIsValidName(false);
      }
      if (emailVal == "") {
        setIsValidEmail(false);
      }
      if (phoneVal == "" || phoneVal == 0 || isNaN(phoneVal)) {
        setIsValidPhone(false);
      }
      if (passVal == "") {
        setIsValidPassword(false);
      }
      if (pass2Val == "") {
        setIsValidPassword2(false);
      }
      if (passVal !== pass2Val) {
        setIsPasswordMatch(false);
        if (pass2Val !== "") {
          setIsValidPassword2(true);
        }
      }
    }
  };

  return (
    <div className="flex justify-center items-center my-12 md:my-52">
      <form
        onSubmit={loginHandler}
        className="w-11/12 md:w-1/2 bg-white p-10 flex flex-col justify-center text-center"
      >
        <h1 className="text-2xl font-bold">Pendaftaran Akun</h1>
        <p className="text-sm font-light">
          Yuk, daftarin akunmu sekarang juga!
        </p>
        <div className="my-5">
          <div className="flex flex-col items-start mb-3">
            <label htmlFor="nama">
              Nama Lengkap <span className="text-red">*</span>
            </label>
            <input
              type="text"
              name="nama"
              id="nama"
              ref={namaInput}
              className="w-full border rounded-md h-10"
            />
            {!isValidName && (
              <span className="text-red">*Nama tidak boleh kosong</span>
            )}
          </div>
          <div className="flex flex-col items-start mb-3">
            <label htmlFor="email">
              E-Mail <span className="text-red">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              ref={emailInput}
              className="w-full border rounded-md h-10"
            />
            {!isValidEmail && (
              <span className="text-red">*Email tidak boleh kosong</span>
            )}
          </div>
          <div className="flex flex-col items-start mb-3">
            <label htmlFor="phone">
              No. Hp <span className="text-red">*</span>
            </label>
            <div className="grid grid-cols-3 w-full gap-3">
              <div className="col-span-1 relative">
                <button
                  onClick={btnPhoneHandler}
                  className="flex items-center gap-3 border rounded-md p-2 w-full"
                >
                  <img
                    src={ddlVal.flag}
                    alt={ddlVal.country}
                    className="w-[20px] h-[20px]"
                  />
                  <div className="flex justify-between items-center w-full">
                    <span>{ddlVal.code}</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </button>
                <ul
                  className={`absolute top-10 end-0 w-full border bg-white z-10  ${
                    showDropdown ? "" : "hidden"
                  }`}
                >
                  {tempPhoneData.map((temp, id) => {
                    return (
                      <li className="hover:bg-slate-300" key={id}>
                        <button
                          onClick={(e) => selectedPhoneHandler(e, temp)}
                          className="flex items-center gap-3  rounded-md p-2 w-full"
                        >
                          <img
                            src={temp.flag}
                            alt={temp.country}
                            className="w-[20px] h-[20px]"
                          />
                          <span>{temp.code}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <input
                className="col-span-2 border rounded-md px-2"
                type="number"
                name="phone"
                id="phone"
                ref={phoneInput}
              />
            </div>
            {!isValidPhone && (
              <span className="text-red">*Nomor Hp tidak boleh kosong</span>
            )}
          </div>
          <div className="flex flex-col items-start mb-3 relative">
            <label htmlFor="password">
              Kata Sandi <span className="text-red">*</span>
            </label>
            <input
              type={toggleShow ? "text" : "password"}
              name="password"
              id="password"
              ref={passwordInput}
              className="w-full border rounded-md h-10"
            />
            <button
              onClick={setToggleShowHandler}
              className="absolute top-8 end-2"
            >
              {toggleShow ? (
                <i className="fa-solid fa-eye"></i>
              ) : (
                <i className="fa-solid fa-eye-slash"></i>
              )}
            </button>
            {!isValidPassword && (
              <span className="text-red">*Kata Sandi tidak boleh kosong</span>
            )}
          </div>
          <div className="flex flex-col items-start mb-3 relative">
            <label htmlFor="password2">
              Konfirmasi Kata Sandi <span className="text-red">*</span>
            </label>
            <input
              type={toggleShow ? "text" : "password"}
              name="password2"
              id="password2"
              ref={password2Input}
              className="w-full border rounded-md h-10"
            />
            <button
              onClick={setToggleShowHandler}
              className="absolute top-8 end-2"
            >
              {toggleShow ? (
                <i className="fa-solid fa-eye"></i>
              ) : (
                <i className="fa-solid fa-eye-slash"></i>
              )}
            </button>
            {!isValidPassword2 && (
              <span className="text-red">*Kata Sandi tidak boleh kosong</span>
            )}
            {!isPasswordMatch && (
              <span className="text-red">
                *Kata Sandi & Konfirmasi Kata Sandi tidak sama
              </span>
            )}
          </div>
          <div className="flex justify-end mb-3">
            <Link to="/" className="text-sm hover:text-secondary">
              Lupa Password?
            </Link>
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="bg-primary block w-full rounded-md text-white py-1"
            >
              Daftar
            </button>
          </div>
          <div className="mb-3">
            <Link
              to="/login"
              type="submit"
              className="bg-accent block  w-full rounded-md text-primary py-1"
            >
              Masuk
            </Link>
          </div>
          <div className="w-full mb-3">
            <p className="or">atau</p>
          </div>
          <div className="mb-3">
            <Link
              to="/"
              className="flex justify-center items-center border rounded-md h-10"
            >
              <img src={Google} alt="Google" className="w-[25px] h-[25px]" />
              Daftar dengan Google
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Register;
