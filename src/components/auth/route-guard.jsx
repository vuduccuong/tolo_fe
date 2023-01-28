import { Navigate } from "react-router-dom";
import { hasAuth } from "../../helpers/auth";

const RouteGuard = ({ children }) => {
  if (!hasAuth()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default RouteGuard;
