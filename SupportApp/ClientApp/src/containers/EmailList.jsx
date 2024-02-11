import React, { useEffect, useState } from "react";
import axios from "axios";

import { Table, Space, Button, message, Modal } from "antd";
import { EyeOutlined, CheckCircleOutlined } from "@ant-design/icons";

import FetchMailTicket from "../components/global/FetchMailTicket";
import { AxiosInstance } from "../router/api";
import useAuthCheck from "../utils/useAuthCheck";
import DeleteTicketButton from "../components/CRUD/DeleteTicketButton.jsx";

const EmailList = () => {
  useAuthCheck();
  const [tickets, setTickets] = useState([]);
  const [ticketData, setTicketData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await AxiosInstance.get(
          "/api/Tickets/getTicketFromMail"
        );
        console.log(response.data);
        setTickets(response.data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  const handleShow = (id) => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get(`/api/Tickets/${id}`);
        setTicketData(response.data);
        console.log(response.data);
        //message.success(`Details popup for Ticket id : ${id}`);
        setIsModalOpen(true);
        //message.success(`issue id : ${id}`);
      } catch (error) {
        console.log(`show error ${error}`);
      }
    };
    fetchData();
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  // Function to update tickets after deletion
  const handleTicketDelete = (deletedId) => {
    setTickets((prevTickets) =>
      prevTickets.filter((ticket) => ticket.id !== deletedId)
    );
  };

  const columns = [
    {
      title: "From",
      dataIndex: "fromEmail",
      key: "fromEmail",
    },
    {
      title: "Subject",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Subject",
      dataIndex: "createdAt",
      key: "createdAt",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            className="text-primary "
            type="default"
            icon={<EyeOutlined />}
            onClick={() => handleShow(record.id)}
          />
          <DeleteTicketButton id={record.id} onDelete={handleTicketDelete} />
        </Space>
      ),
    },
  ];

  return (
    <>
      <section className="flex items-center justify-center">
        <div className="container p-3 rounded-md">
          <div className="flex flex-row p-1 justify-between">
            <h1 className="text-2xl font-bold mb-4">Issue from mail</h1>
            <FetchMailTicket />
          </div>
          <Table key={tickets.id} dataSource={tickets} columns={columns} />
        </div>
      </section>

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

export default EmailList;
