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
    } else {
      const roleData = localStorage.getItem("token");
      const decodedToken = jwtDecode(roleData);
      const { role } = decodedToken;

      // based on this role , if the role is "SUPPORTAGENT" then i will redirect to "/employee" route , if the role is "ADMIN" then it will redirect to "/" route
    }
  }, [history]);
  return <></>;
};

export default useAuthCheck;
