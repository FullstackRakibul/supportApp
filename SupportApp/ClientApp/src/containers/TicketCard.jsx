import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Space, Button, message } from "antd";
import {
  RollbackOutlined,
  DeleteOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const TicketCard = () => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

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
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            className="text-warning "
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
            className="text-error "
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ];

  const handleShow = (id) => {
    console.log(`Show ticket with ID ${id}`);
  };

  const handleReply = (id) => {
    console.log(`Reply ticket with ID ${id}`);
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
        <div className="flex justify-center items-start">
          <div className="table">
            <Table
              className="font-semibold"
              scroll={{ x: "max-content" }}
              dataSource={ticket}
              columns={columns}
              loading={loading}
              rowKey="id"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TicketCard;
