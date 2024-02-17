import { message } from "antd";
import { jwtDecode } from "jwt-decode";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthCheck = () => {
  const history = useNavigate();
  useEffect(() => {
    const authToken = localStorage.getItem("token");
    // if (!authToken) {
    //   {
    //     history("/sessionform");
    //     return;
    //   }
    // }
    if (!authToken) {
      {
        history("/sessionform");
        return;
      }
      // } else {
      //   const decodedToken = jwtDecode(authToken);
      //   const { role } = decodedToken;
      //   if (role === "EMPLOYEE") {
      //     history("/employee/");
      //   } else if (role === "ADMIN") {
      //     history("/");
      //   } else {
      //     history("/");
      //   }
    }
  }, [history]);
  return <></>;
};

export default useAuthCheck;

// const requiredRole = "ADMIN";
// const userHasPermission = hasPermission(requiredRole);
// if (!userHasPermission) {
//   return <NotFoundPage />;
// }
