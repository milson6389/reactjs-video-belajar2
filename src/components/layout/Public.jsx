import { Navigate } from "react-router-dom";

const Public = (props) => {
  const isLoggedIn = localStorage.getItem("user") != null;
  return isLoggedIn ? <Navigate to="/" /> : <>{props.children}</>;
};

export default Public;
