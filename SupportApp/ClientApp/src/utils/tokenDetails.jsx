import { jwtDecode } from "jwt-decode";
import React from "react";

const useDetails = () => {
  const roleData = localStorage.getItem("token");
  const decodedToken = jwtDecode(roleData);
  const { role, EmpCode } = decodedToken;
  return { role, EmpCode };
};

export default useDetails;