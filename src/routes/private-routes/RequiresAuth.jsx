import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RequiresAuth = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();
  return token || localStorage.getItem("token") ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace={true} />
  );
};

export { RequiresAuth };
