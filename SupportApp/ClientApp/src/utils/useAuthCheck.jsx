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
  }, [history]);
  return <></>;
};

export default useAuthCheck;
