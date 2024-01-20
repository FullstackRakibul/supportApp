import React from "react";
import { useNavigate } from "react-router-dom";

import { LoginOutlined } from "@ant-design/icons";
import { Button, message } from "antd";

const SessionIn = () => {
  return (
    <>
      <Button
        type="primary"
        className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white"
        icon={<LoginOutlined />}
        href="/sessionform"
      >
        Session In
      </Button>
    </>
  );
};

export default SessionIn;
