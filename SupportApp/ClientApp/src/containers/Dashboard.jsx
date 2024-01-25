import { Card } from "antd";
import React from "react";
import DocumentationSection from "./dashboard/DocumentationSection";
import IssueBox from "./dashboard/IssueBox";
import { Row, Col, Menu } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import {
  FileAddOutlined,
  SnippetsOutlined,
  FileDoneOutlined,
  MailOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";

function Dashboard() {
  const handleClick = () => {
    console.log("Button has been clicked.");
  };
  const customRoutes = [
    {
      path: "ticket/all",
      label: "All Tickets",
      icon: <SnippetsOutlined />,
    },
    { path: "dashboard/unit", label: "Pending", icon: <FileAddOutlined /> },
    {
      path: "dashboard/department",
      label: "Complete",
      icon: <FileDoneOutlined />,
    },
    { path: "/", label: "Un-assigned", icon: <FileExcelOutlined /> },
    {
      path: "dashboard/ticketList",
      label: "Mail Tickets",
      icon: <MailOutlined />,
    },
    {
      path: "dashboard/replycard",
      label: "Chat",
      icon: <MailOutlined />,
    },
  ];
  return (
    <>
      <section>
        <Row>
          <Col span={6}>
            <div>
              <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
                {customRoutes.map((route) => (
                  <Menu.Item
                    style={{ accentColor: "#000" }}
                    key={route.path}
                    icon={route.icon}
                  >
                    <NavLink
                      className="font-sans font-semibold"
                      to={route.path}
                    >
                      {route.label}
                    </NavLink>
                  </Menu.Item>
                ))}
              </Menu>
            </div>
          </Col>
          <Col
            span={16}
            className="p-2 bg-[#f1f1f1] rounded-md flex flex-col gap-3 overflow-auto"
            style={{ maxHeight: "600px" }}
          >
            <Outlet />
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Dashboard;

{
  /* <Card
type="inner"
title="Create Issue Ticket"
headStyle={{
  backgroundColor: "#000",
  color: "#fff",
  fontFamily: "Montserrat",
}}
>
<p className=" text-xl font-semibold "> 846+ </p>
</Card> */
}
