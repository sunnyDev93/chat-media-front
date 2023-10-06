import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthStatus } from "../../store/auth/selectors";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(getAuthStatus);

  if (!isAuthenticated) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" />;
  }

  // authorized so return child components
  return children;
};

export default PrivateRoute;
