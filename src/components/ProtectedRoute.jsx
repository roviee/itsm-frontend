import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { token, role } = useAuth();
  // console.log("ProtectedRoute - Role:", role, "Token:", token);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  if (!role) return <div>Loading...</div>;

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};
export default ProtectedRoute;
