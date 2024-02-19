import React, { useState } from "react";
import { Button } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import ReviewCard from "../../../containers/ticket/ReviewCard";
import { NavLink } from "react-router-dom";

const ReviewTicketButton = (ticketId) => {
  const handleSubmit = (ticketId) => {
    console.log(ticketId);
  };
  return (
    <>
      <Button
        type="primary"
        className="bg-white w-32  text-primary border border-primary font-sans font-xl font-normal hover:bg-primary hover:text-white"
        icon={<MessageOutlined />}
        onClick={() => handleSubmit(ticketId)}
      >
        {/* <NavLink to={`/employee/empisuuelist/reviewCard/${ticketId}`}>
          Review
        </NavLink> */}
        Review
      </Button>
    </>
  );
};

export default ReviewTicketButton;
