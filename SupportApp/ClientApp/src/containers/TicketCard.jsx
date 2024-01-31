import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Space, Button, message, Modal, Form, Select } from "antd";
import {
  RollbackOutlined,
  EditOutlined,
  EyeOutlined,
  RedoOutlined,
  UserAddOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

import AxiosInstance from "../router/api";
import AssignSupportEngineerModal from "./service/AssignSupportEngineerModal";
import useAuthCheck from "../utils/useAuthCheck";

const TicketCard = () => {
  useAuthCheck();
  const [ticket, setTicket] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:7295/api/Tickets");
        setTicket(response.data);
        setLoading(false);

        //console.log("This is response data ", response.data);
      } catch (error) {
        console.log("API error ", console.error());
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const columns = [
    { title: "TicketNumber", dataIndex: "ticketNumber", key: "TicketNumber" },
    { title: "Title", dataIndex: "title", key: "title" },
    //{ title: "priority", dataIndex: "priority", key: "priority" },
    { title: "createdAt", dataIndex: "createdAt", key: "createdAt" },
    { title: "Status", dataIndex: "status", key: "status" },
    { title: "Acknoledge by", dataIndex: "agentId", key: "agentId" },
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
          <Button
            className=" text-primary "
            type="dashed"
            icon={<RollbackOutlined />}
            onClick={() => handleReply(record.id)}
          />
          <Button
            className="text-primary"
            type="dashed"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record.id)}
          />
          <Button
            className="text-primary "
            type="dashed"
            icon={<UserAddOutlined />}
            onClick={() => handleAssignAgent(record.id)}
          />
          <AssignSupportEngineerModal ticketId={record.id} />
        </Space>
      ),
    },
  ];

  // handle refresh

  const handleRefresh = async () => {
    try {
      const response = await AxiosInstance.get("/api/Tickets/FetchEmailData");
      setTicketData(response.data);
      message.success("mail data fatching success. try refresh");
    } catch (error) {
      message.error(`Server Error ! ${error}`);
      console.log(`refresh mail error : ${error}`);
    }
  };

  // handle action button
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ticketData, setTicketData] = useState([]);
  const handleShow = (id) => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get(`/api/Tickets/${id}`);
        setTicketData(response.data);
        //console.log(response.data);
        //message.success(`Details popup for Ticket id : ${id}`);
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

  // handle issue reply system ..........
  const handleReply = (id) => {
    console.log(`Reply ticket with ID ${id}`);
    message.success(`Reply for Ticket id : ${id}`);
  };

  const handleEdit = (id) => {
    message.success(`Edit Ticket id : ${id}`);
    console.log(`Edit ticket with ID ${id}`);
  };

  // hangle assign agent .............................................

  const [isAssignAgentModalOpen, setIsAssignAgentModalOpen] = useState(false);
  const handleAssignAgent = (id) => {
    setIsAssignAgentModalOpen(true);
  };

  const handleAssignAgentSubmit = async (agentId) => {
    try {
      setIsAssignAgentModalOpen(true);
      // Send a request to assign the agent to the ticket
      const response = await AxiosInstance.post(
        `/api/Tickets/${id}/AssignAgent`,
        { agentId: agentId }
      );

      // Handle the response as needed
      console.log(response.data);
      message.success("Agent assigned successfully.");
      setIsAssignAgentModalOpen(false);
    } catch (error) {
      console.error("Assign agent error:", error);
      message.error("Failed to assign agent.");
    }
  };

  // handle solf delete ..........
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localhost:7295/api/Ticket/${id}`);
      console.log(`Ticket with id ${id} , deleted successfully.`);
      setTicket((prevTickets) =>
        prevTickets.filter((ticket) => ticket.id !== id)
      );
      message.error("Ticket Deleted Successfully");
    } catch (error) {
      console.log(`Delete operation failed ! ${id}`, error);
    }
    console.log(`Delete ticket with ID ${id}`);
  };

  return (
    <>
      <section className="container mx-auto p-3">
        <div className="">
          <div className="flex justify-between gap-5 items-center">
            <span>
              <h1 className="text-2xl font-bold mb-4">Issue Ticket List</h1>
            </span>
            <span>
              <Button
                type="primary"
                className="font-sans font-semibold bg-primary"
                icon={<RedoOutlined />}
                onClick={handleRefresh}
              >
                Get Ticket From Mail
              </Button>
            </span>
          </div>
          <Table
            sticky={true}
            className="font-semibold"
            scroll={{ y: "max-content" }}
            dataSource={ticket}
            columns={columns}
            loading={loading}
            rowKey="id"
          />
        </div>
      </section>

      <Modal
        title={ticketData.title}
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
        <h3 className="text-lg font-sans font-semibold">Details:</h3>
        <p className="font-sans font-semibold">{ticketData.description}</p>
      </Modal>
      {/* add another model for assignning the Agent */}
      <AssignAgentModal
        visible={isAssignAgentModalOpen}
        onCancel={() => setIsAssignAgentModalOpen(false)}
        onAssign={handleAssignAgentSubmit}
      />
    </>
  );
};

// Assign Agent Options
const AssignAgentModal = ({ visible, onCancel, onAssign }) => {
  const [selectedAgentId, setSelectedAgentId] = useState(null);
  const [supportEngineer, setSupportEngineer] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      const response = await AxiosInstance.get("/api/Supports");
      //setTicket(responseForTicket.data);
      setSupportEngineer(response.data);
    };
    fetchData();
  }, []);

  const handleSubmit = async () => {
    // Validate that an agent is selected
    const values = await form.validateFields();
    console.log(values);
    if (!values) {
      message.error("Select support engineer first");
      return;
    }
    onAssign(values);
  };

  // hangle assign agent .............................................

  const [isAssignAgentModalOpen, setIsAssignAgentModalOpen] = useState(false);
  const handleAssignAgent = (id) => {
    setIsAssignAgentModalOpen(true);
  };

  const handleAssignAgentSubmit = async (agentId) => {
    try {
      setIsAssignAgentModalOpen(true);
      // Send a request to assign the agent to the ticket
      const response = await AxiosInstance.post(
        `/api/Tickets/${id}/AssignAgent`,
        { agentId: agentId }
      );

      // Handle the response as needed
      console.log(response.data);
      message.success("Agent assigned successfully.");
      setIsAssignAgentModalOpen(false);
    } catch (error) {
      console.error("Assign agent error:", error);
      message.error("Failed to assign agent.");
    }
  };
  return (
    <Modal
      title="Assign Agent"
      visible={visible}
      onCancel={onCancel}
      onOk={handleSubmit}
      footer={[
        <Button onClick={handleSubmit} className="bg-primary" type="primary">
          Assign
        </Button>,
      ]}
    >
      <Form form={form}>
        <Form.Item
          label="Select Agent"
          name="agentId"
          key="agentId"
          rules={[{ required: true }]}
        >
          <Select style={{ width: 200 }}>
            {supportEngineer.map((item) => (
              <Select.Option key={item.agentId} value={item.agentId}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default TicketCard;
