import { Navigate } from "react-router-dom";

const Private = (props) => {
  const isLoggedIn = localStorage.getItem("user") != null;
  return isLoggedIn ? <>{props.children}</> : <Navigate to="/" />;
};

export default Private;
