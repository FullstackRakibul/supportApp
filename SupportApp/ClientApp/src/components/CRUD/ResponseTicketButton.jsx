import React from "react";
import { AxiosInstance } from "../../router/api";
import { Button, message } from "antd";
import { AliwangwangOutlined } from "@ant-design/icons";
const ResponseTicketButton = (props) => {
  const handleFeedback = async (id) => {
    try {
      console.log(id);
      message.success("Ticket Deleted Successfully");
    } catch (error) {
      console.log(`Not Allowed !!!`);
    }
  };

  return (
    <>
      <Button
        className="font-sans w-32 font-semibold text-primary border border-primary  font-xl "
        type="primary"
        icon={<AliwangwangOutlined />}
        onClick={() => handleFeedback(props.id)}
      >
        Response
      </Button>
    </>
  );
};

export default ResponseTicketButton;
