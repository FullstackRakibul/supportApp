import React from "react";
import { Modal, Form, Select, Button, message, Input } from "antd";
import { MailOutlined } from "@ant-design/icons";
const MailReplyTicketButton = () => {
  const handleClick = () => {
    message.success("Reply mail will send automatically .");
  };
  return (
    <>
      <Button
        type="primary"
        className="bg-primary w-32  text-white font-sans font-xl font-normal hover:bg-white"
        icon={<MailOutlined />}
        onClick={handleClick}
      >
        Reply Mail
      </Button>
    </>
  );
};

export default MailReplyTicketButton;
