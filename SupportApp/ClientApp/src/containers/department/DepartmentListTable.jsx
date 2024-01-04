import React, { useEffect, useState } from "react";

import { Space, Table, Tag } from "antd";
import axios from "axios";
const columns = [
  {
    title: "Department Name",
    dataIndex: "DepartmentName",
    key: "departmentName",
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
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

function DepartmentListTable() {
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
      } catch (error) {}
    };
  });

  return (
    <>
      <Table columns={columns} virtual scroll={{ x: 2000, y: 500 }} />
    </>
  );
}

export default DepartmentListTable;
