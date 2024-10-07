import ProfileImage from "../../assets/img/profile.png";
import { useState, useRef } from "react";

const DashboardProfile = () => {
  const [toggleShow, setToggleShow] = useState(false);
  const passwordInput = useRef();
  const password2Input = useRef();

  const setToggleShowHandler = (e) => {
    e.preventDefault();
    setToggleShow(!toggleShow);
  };

  return (
    <div className="flex flex-col items-start p-3 border border-slate-300 rounded-md bg-white w-full">
      <div className="flex justify-start gap-5 md:gap-10 w-full">
        <img src={ProfileImage} alt="profile_image" className="w-[100px]" />
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-2xl">Jennie Ruby Jane</h1>
          <p className="text-md">rubyjane@gmail.com</p>
          <button className="text-red">Ganti Foto Profil</button>
        </div>
      </div>

      <div className="flex flex-col justify-between w-full my-5">
        <div className="flex flex-col mb-3">
          <label htmlFor="name" className="focus:text-primary">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border border-slate-300 rounded-md focus:border focus:border-primary"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-slate-300 rounded-md focus:border focus:border-primary"
          />
        </div>
        <div className="flex flex-col mb-3 w-full">
          <label htmlFor="nohp">No. Hp</label>
          <div className="flex gap-3 items-center">
            <select
              name="country"
              id="country"
              className="border border-slate-300 rounded-md w-1/3"
            >
              <option value="+62">+62</option>
            </select>
            <input
              type="number"
              name="nohp"
              id="nohp"
              className="border border-slate-300 rounded-md focus:border focus:border-primary w-2/3"
            />
          </div>
        </div>
        <div className="flex flex-col items-start mb-3 relative">
          <label htmlFor="password">Password</label>
          <input
            type={toggleShow ? "text" : "password"}
            name="password"
            id="password"
            ref={passwordInput}
            className="w-full border rounded-md"
          />
          <button
            onClick={setToggleShowHandler}
            className="absolute top-6 end-2"
          >
            {toggleShow ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-solid fa-eye-slash"></i>
            )}
          </button>
        </div>
        <div className="flex flex-col items-start mb-3 relative">
          <label htmlFor="password2">Konfirmasi Password</label>
          <input
            type={toggleShow ? "text" : "password"}
            name="password2"
            id="password2"
            ref={password2Input}
            className="w-full border rounded-md"
          />
          <button
            onClick={setToggleShowHandler}
            className="absolute top-6 end-2"
          >
            {toggleShow ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-solid fa-eye-slash"></i>
            )}
          </button>
        </div>
        <div className="flex justify-end">
          <button className="text-white bg-primary px-5 py-3 rounded-md w-full md:w-24">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
