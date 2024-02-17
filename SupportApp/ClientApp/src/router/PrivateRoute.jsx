import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ role, component: Component, ...rest }) => {
  // Check if user has the required role
  const isAuthenticated = checkRole(role);

  return isAuthenticated ? (
    <Route {...rest} element={<Component />} />
  ) : (
    <Navigate to="/sessionform" />
  );
};

export default PrivateRoute;

// import { Route, Navigate } from "react-router-dom";
// import { Outlet } from "react-router-dom";

// const PrivateRoute = ({ children, ...rest }) => {
//   const token = localStorage.getItem("token");

//   return (
//     <Route
//       {...rest}
//       element={
//         token ? (
//           children
//         ) : (
//           <Navigate to="/sessionform" state={{ from: location }} replace />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;
