import React, { useEffect, useState } from "react";
import { Table, Space, Button, message, Modal } from "antd";
import { AxiosInstance } from "../../../router/api";
import FetchMailTicket from "../../../components/global/FetchMailTicket";
import useAuthCheck from "../../../utils/useAuthCheck";
import { EyeOutlined, CheckCircleOutlined } from "@ant-design/icons";
import DeleteTicketButton from "../../../components/CRUD/DeleteTicketButton";
const AgentIssueList = () => {
  useAuthCheck();
  const [tickets, setTickets] = useState([]);
  const [ticketData, setTicketData] = useState([]);

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
            <h1 className="text-2xl font-bold mb-4">Mail Issue List</h1>
            <FetchMailTicket />
          </div>
          <Table key={tickets.id} dataSource={tickets} columns={columns} />
        </div>
      </section>
    </>
  );
};

export default AgentIssueList;
