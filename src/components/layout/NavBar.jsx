import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import Profile from "../../assets/img/profile.png";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user") != null;

  const setIsMobileHandler = () => {
    setIsMobile(!isMobile);
  };
  const setIsActiveHandler = () => {
    setIsActive(!isActive);
  };

  const logoutHandler = () => {
    if (confirm("Logout ?")) {
      localStorage.removeItem("user");
      setIsMobile(false);
      setIsActive(false);
      navigate("/login");
    }
  };

  return (
    <header className="sticky top-0 px-5 py-2 bg-white h-fit">
      <nav className="md:hidden">
        <div className="z-10 mx-5">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img className="w-1/3 z-10" src={Logo} alt="Logo" />
            </Link>
            {isLoggedIn ? (
              <button
                onClick={setIsMobileHandler}
                id="btnToggle"
                className="cursor-pointer z-10"
              >
                {isMobile ? (
                  <i className="fa-solid fa-x"></i>
                ) : (
                  <i className="fa-solid fa-bars"></i>
                )}
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
        {isLoggedIn && (
          <ul
            className={`w-screen z-10 absolute top-0 start-0 toggleMenu flex flex-col justify-center gap-5 px-10 py-3 rounded-md border border-gray-100 bg-white shadow-lg  ${
              isMobile ? "translate-y-11" : "-translate-y-96"
            }`}
          >
            <li>
              <Link to="/">Kategori</Link>
            </li>
            <li>
              <Link to="/">Profil Saya</Link>
            </li>
            <li>
              <Link to="/">Kelas Saya</Link>
            </li>
            <li>
              <Link to="/">Pesanan Saya</Link>
            </li>
            <li>
              <button onClick={logoutHandler} className="text-red">
                Keluar
                <i className="mx-1 fa-solid fa-arrow-right-from-bracket"></i>
              </button>
            </li>
          </ul>
        )}
      </nav>
      <nav className="mx-5 hidden md:flex justify-between items-center">
        <Link to="/">
          <img className="w-1/3 z-10" src={Logo} alt="Logo" />
        </Link>
        {isLoggedIn ? (
          <div className="flex items-center gap-5">
            <Link to="/">Kategori</Link>
            <div className="relative">
              <button onClick={setIsActiveHandler}>
                <img
                  src={Profile}
                  alt="profile"
                  className="w-[50px] h-[50px] rounded-md relative"
                />
              </button>
              <ul
                className={`toggleMenu absolute z-10 end-0 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg ${
                  isActive ? "" : "hidden"
                }`}
              >
                <li className="p-4 hover:bg-slate-300">
                  <Link to="/">Profil Saya</Link>
                </li>
                <li className="p-4 hover:bg-slate-300">
                  <Link to="/">Kelas Saya</Link>
                </li>
                <li className="p-4 hover:bg-slate-300">
                  <Link to="/">Pesanan Saya</Link>
                </li>
                <li className="p-4 hover:bg-slate-300">
                  <button onClick={logoutHandler} className="text-red">
                    Keluar
                    <i className="mx-1 fa-solid fa-arrow-right-from-bracket"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
