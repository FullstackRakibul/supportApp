import React from "react";
import { AxiosInstance } from "../../router/api";
import { Button, message } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

const DeleteTicketButton = ({ id }) => {
  // handle solf delete ..........
  const handleDelete = async (id) => {
    try {
      await AxiosInstance.delete(`/api/Tickets/${id}`);
      message.success("Ticket Deleted Successfully");
      //window.location.reload();
    } catch (error) {
      console.log(`Delete operation failed ! ${id}`, error);
    }
  };

  return (
    <>
      <Button
        className="font-sans w-32 font-normal"
        danger
        type="primary"
        icon={<DeleteOutlined />}
        onClick={() => handleDelete(id)}
      >
        Delete
      </Button>
    </>
  );
};

export default DeleteTicketButton;
