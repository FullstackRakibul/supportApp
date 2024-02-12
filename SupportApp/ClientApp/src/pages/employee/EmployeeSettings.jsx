import React from "react";
import hasPermission from "../../utils/hasPermission";
import NotFoundPage from "../../containers/NotFoundPage";
import useAuthCheck from "../../utils/useAuthCheck";

const EmployeeSettings = () => {
  useAuthCheck();
  const requiredRole = "ADMIN";
  const userHasPermission = hasPermission(requiredRole);
  if (!userHasPermission) {
    return <NotFoundPage />;
  }
  return <>Settings page</>;
};

export default EmployeeSettings;
