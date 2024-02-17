import React, { useState } from "react";
import { Button, Modal, Row, Col } from "antd";
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
        className="bg-primary w-32  text-white font-sans font-xl font-normal hover:bg-white"
        icon={<EyeOutlined />}
        onClick={() => handleShow(id)}
      >
        View
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
        <Row className="bg-[#f1f1f1] , p-2 rounded">
          <Col className="" xs={20} sm={20} md={20}>
            <p className="text-sm">
              <span className="font-semibold">Acknowledged By:</span> Rakibul
            </p>
            <p>
              <span className="font-semibold">Status:</span> {ticketData.status}
            </p>
            <p>
              <span className="font-semibold">Type:</span> Mail Issue
            </p>
            <p>
              <span className="font-semibold">Raised By:</span> employee01
            </p>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ViewTicketButton;
