import { message } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthCheck = () => {
  const history = useNavigate();
  useEffect(() => {
    const authToken = localStorage.getItem("token");
    if (!authToken) {
      {
        history("/sessionform");
      }
    }

    // const token = localStorage.getItem("token");
    // const decodedToken = jwtDecode(token);
    // const { name, email, role } = decodedToken;
  }, [history]);
  return <></>;
};

export default useAuthCheck;
