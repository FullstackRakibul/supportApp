import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Space, Button, message } from "antd";
import {
  RollbackOutlined,
  EditOutlined,
  EyeOutlined,
  RedoOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const TicketCard = () => {
  // const config = {
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //   },
  // };

  const [ticket, setTicket] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7295/api/Ticket?format=json"
        );
        setTicket(response.data);
        setLoading(false);

        console.log("This is response", response);
        console.log("This is response data ", response.data);
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
    { title: "priority", dataIndex: "priority", key: "priority" },
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
            onClick={() => handleAsignAgent(record.id)}
          />
        </Space>
      ),
    },
  ];

  // handle refresh

  const handleRefresh = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7295/api/Ticket/FetchEmailData"
      );
      //setTicket(response);
      message.success("Mail fetching successfully.press f5");
      console.log(response.data);
    } catch (error) {
      console.log(`refresh mail error : ${error}`);
    }
  };

  // handle action button
  const handleShow = (id) => {
    console.log(`Show ticket with ID ${id}`);
    message.success(`Details popup for Ticket id : ${id}`);
  };

  const handleReply = (id) => {
    console.log(`Reply ticket with ID ${id}`);
    message.success(`Reply for Ticket id : ${id}`);
  };

  const handleEdit = (id) => {
    message.success(`Edit Ticket id : ${id}`);
    console.log(`Edit ticket with ID ${id}`);
  };

  const handleAsignAgent = (id) => {
    message.success(`Asign Agent for Ticket id : ${id}`);
    console.log(`Asign Agent for ticket ID ${id}`);
  };

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
                Refresh Ticket
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
    </>
  );
};

export default TicketCard;
