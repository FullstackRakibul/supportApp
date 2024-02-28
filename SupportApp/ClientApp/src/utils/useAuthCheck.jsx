import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthCheck = () => {
  const history = useNavigate();
  useEffect(() => {
    const authToken = localStorage.getItem("token");
    if (!authToken) {
      {
        history("/sessionform");
        return;
      }
    }
  }, [history]);
  return <></>;
};

export default useAuthCheck;
