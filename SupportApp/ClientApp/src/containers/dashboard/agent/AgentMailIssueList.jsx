import React, { useEffect, useState } from "react";
import { Table, Space, Button, message, Modal } from "antd";
import { AxiosInstance } from "../../../router/api";
import FetchMailTicket from "../../../components/global/FetchMailTicket";
import useAuthCheck from "../../../utils/useAuthCheck";
import { EyeOutlined, CheckCircleOutlined } from "@ant-design/icons";
import DeleteTicketButton from "../../../components/CRUD/DeleteTicketButton";
import ViewTicketButton from "../../../components/CRUD/ViewTicketButton";
const AgentIssueList = () => {
  useAuthCheck();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await AxiosInstance.get(
          "/api/Tickets/getTicketFromMail"
        );
        setTickets(response.data);
      } catch (error) {
        message.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);

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
      render: (text, record) => {
        return text ? text : record.createdBy;
      },
    },
    {
      title: "Subject",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "create date",
      dataIndex: "createdAt",
      key: "createdAt",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <DeleteTicketButton id={record.id} onDelete={handleTicketDelete} />
          <ViewTicketButton id={record.id} />
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
