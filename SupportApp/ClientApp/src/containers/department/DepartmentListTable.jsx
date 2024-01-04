import React, { useEffect, useState } from "react";

import { Space, Table } from "antd";
import axios from "axios";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
const columns = [
  {
    title: "Department Name",
    dataIndex: "departmentName",
    key: "DepartmentName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Note",
    dataIndex: "note",
    key: "note",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <EyeOutlined />
        <EditOutlined />
      </Space>
    ),
  },
];

function DepartmentListTable() {
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7295/api/Departments"
        );
        setDepartment(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(`Data fatching error ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Table
        columns={columns}
        dataSource={department}
        // virtual
        // scroll={{ x: 2000, y: 500 }}
      />
    </>
  );
}

export default DepartmentListTable;
