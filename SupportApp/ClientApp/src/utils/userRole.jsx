import React from "react";

const useRole = () => {
  const roleData = localStorage.getItem("token");
  const decodedToken = jwtDecode(roleData);
  const { role } = decodedToken;

  return role;
};

export default useRole;
