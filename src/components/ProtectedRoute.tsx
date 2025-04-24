import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { isAuthenticated } from "../utils/auth";

type ProtectedRouteProps = {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;