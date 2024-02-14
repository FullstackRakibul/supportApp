import React, { useState } from "react";
import { Button, Modal } from "antd";
import { EyeOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { AxiosInstance } from "../../router/api";

const ViewTicketButton = ({ id }) => {
  const [ticketData, setTicketData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShow = (id) => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get(`/api/Tickets/${id}`);
        setTicketData(response.data);
        setIsModalOpen(true);
      } catch (error) {
        console.log(`show error ${error}`);
      }
    };
    fetchData();
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        className="bg-primary text-white font-sans font-xl font-semibold hover:bg-primary "
        icon={<EyeOutlined />}
        onClick={() => handleShow(id)}
      >
        view
      </Button>

      <Modal
        title={
          <h3 className="font-sans text-lg font-semibold ">
            Issue name : {ticketData.title}
          </h3>
        }
        open={isModalOpen}
        onOk={handleOk}
        footer={[
          <Button
            key="back"
            className="bg-primary"
            type="primary"
            icon={<CheckCircleOutlined />}
            onClick={handleOk}
          ></Button>,
        ]}
        style={{}}
      >
        <h3 className="text-md font-sans font-bold">Details :</h3>
        <p className="font-sans font-semibold">{ticketData.description}</p>
      </Modal>
    </>
  );
};

export default ViewTicketButton;
