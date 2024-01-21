import { Route, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const token = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      element={
        token ? (
          children
        ) : (
          <Navigate to="/sessionform" state={{ from: location }} replace />
        )
      }
    />
  );
};

export default PrivateRoute;
