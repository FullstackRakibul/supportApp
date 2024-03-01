import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, message } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import tokenDetails from "../../../utils/tokenDetails";
import { AxiosInstance } from "../../../router/api";
import DeleteTicketButton from "../../../components/CRUD/DeleteTicketButton";
import ViewTicketButton from "../../../components/CRUD/ViewTicketButton";
import ResponseTicketButton from "../../../components/CRUD/ResponseTicketButton";

const EmployeeIssueListAcknowledgeContainer = () => {
  const { role, EmpCode } = tokenDetails();

  const [dataSource, setDataSource] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [assignModalVisible, setAssignModalVisible] = useState(false);
  const [statusModalVisible, setStatusModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get(
          `/api/Tickets/getAcknowledgeTicketByCreator/${EmpCode}`
        );
        console.log("Response data:", response.data);
        setDataSource(response.data);
        message.success(response.data);
      } catch (error) {
        message.error(error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      className: "font-anekBangla text-lg font-normal",
      filters: [
        {
          text: "Leave Allocation",
          value: "leave",
        },
        {
          text: "Need Shift",
          value: "shift",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.title.includes(value),
      //width: "30%",
    },
    {
      title: "Acknowledge by",
      dataIndex: "agentName",
      width: "20%",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span className=" flex gap-2" key={record.id}>
          <ViewTicketButton id={record.id} />
          <ResponseTicketButton id={record.id} />
        </span>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <section>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          bordered
          onChange={onChange}
        />
      </section>
    </>
  );
};

export default EmployeeIssueListAcknowledgeContainer;
