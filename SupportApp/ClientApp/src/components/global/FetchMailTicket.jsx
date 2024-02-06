import React, { useState, useEffect } from "react";
import { Button, message } from "antd";
import { RedoOutlined } from "@ant-design/icons";
import AxiosInstance from "../../router/api";

const FetchMailTicket = () => {
  const [ticketData, setTicketData] = useState([]);
  const handleRefresh = async () => {
    try {
      const response = await AxiosInstance.get("/api/Tickets/FetchEmailData");
      setTicketData(response.data);
      message.success("mail data fatching success.");
      window.location.reload();
    } catch (error) {
      message.error(`Server Error ! ${error}`);
      console.log(`refresh mail error : ${error}`);
    }
  };
  return (
    <>
      <Button
        type="primary"
        className="font-sans font-semibold bg-primary"
        icon={<RedoOutlined />}
        onClick={handleRefresh}
      >
        Get Ticket From Mail
      </Button>
    </>
  );
};

export default FetchMailTicket;
