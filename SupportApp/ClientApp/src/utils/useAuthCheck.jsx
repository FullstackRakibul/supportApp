import { message } from "antd";
import { jwtDecode } from "jwt-decode";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthCheck = () => {
  const history = useNavigate();
  useEffect(() => {
    // const authToken = localStorage.getItem("token");
    // if (!authToken) {
    //   {
    //     history("/sessionform");
    //     return;
    //   }
    // }
    // try {
    //   const decodedToken = jwtDecode(authToken);
    //   const { role } = decodedToken;

    //   console.log(role);
    //   if (role === "EMPLOYEE") {
    //     history("/employee/");
    //   } else if (role === "ADMIN") {
    //     history("/");
    //   } else {
    //     history("/");
    //   }
    // } catch (error) {
    //   console.error("Error in decoding Token : ", error);
    // }
  }, [history]);
  return <></>;
};

export default useAuthCheck;

// const requiredRole = "ADMIN";
// const userHasPermission = hasPermission(requiredRole);
// if (!userHasPermission) {
//   return <NotFoundPage />;
// }
