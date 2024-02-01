import React from "react";
import { useNavigate } from "react-router-dom";

import { PoweroffOutlined } from "@ant-design/icons";
import { Button, message } from "antd";

const SessionOut = () => {
  const history = useNavigate();
  const handleSessionOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    history("/sessionform");
    window.location.reload();
    message.error("Session is Cleared.");
  };
  return (
    <>
      <Button
        danger
        type="link"
        className="font-sans font-semibold"
        icon={<PoweroffOutlined />}
        onClick={handleSessionOut}
      >
        Session Out
      </Button>
    </>
  );
};

export default SessionOut;