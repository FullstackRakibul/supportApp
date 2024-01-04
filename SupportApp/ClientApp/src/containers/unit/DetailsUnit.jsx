import { Space, Table, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Uni Name",
    dataIndex: "name",
    key: "unitName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
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

function DetailsUnit() {
  const [unit, setUnit] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:7295/api/Units");
        setUnit(response.data);

        console.log(response.data);
        //message.success("data loaded successfully");
      } catch (error) {
        console.log(`unit table data fatching error. ${error}`);
        message.error("Unit Data fatching error !!!");
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <section>
        <h3 className="font-sans text-2xl">All Unit Names</h3>
        <Table
          columns={columns}
          dataSource={unit}
          // virtual
          // scroll={{ x: 2000, y: 500 }}
        />
      </section>
    </>
  );
}

export default DetailsUnit;
