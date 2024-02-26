import React, { useEffect, useState } from "react";
import { Table, Space, Button, message, Modal } from "antd";
import { UsergroupAddOutlined, EditOutlined } from "@ant-design/icons";
import { AxiosInstance } from "../../../router/api";
import useAuthCheck from "../../../utils/useAuthCheck";
import DeleteTicketButton from "../../../components/CRUD/DeleteTicketButton";
import tokenDetails from "../../../utils/tokenDetails";
import ViewTicketButton from "../../../components/CRUD/ViewTicketButton";
import UpdateStatusTicketButton from "../../../components/CRUD/UpdateStatusTicketButton";
const AgentIssueList = () => {
  useAuthCheck();
  const { role, EmpCode } = tokenDetails();
  const [tickets, setTickets] = useState([]);
  const [statusModalVisible, setStatusModalVisible] = useState(false);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await AxiosInstance.get(
          `/api/Targets/agentIssueList/${EmpCode}`
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
      title: "Issue Raise Time",
      dataIndex: "createdAt",
      key: "createdAt",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <ViewTicketButton id={record.id} />
          <UpdateStatusTicketButton
            visible={statusModalVisible}
            onCancel={() => setStatusModalVisible(false)}
            issueId={record.id}
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
            <h1 className="text-2xl font-bold mb-4">Issue List</h1>
          </div>
          <Table key={tickets.id} dataSource={tickets} columns={columns} />
        </div>
      </section>
    </>
  );
};

export default AgentIssueList;
