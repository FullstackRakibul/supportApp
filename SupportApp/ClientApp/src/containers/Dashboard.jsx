import { Card } from "antd";
import React from "react";
import DocumentationSection from "./dashboard/DocumentationSection";
import IssueBox from "./dashboard/IssueBox";
import { Row, Col, Menu } from "antd";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import {
  FileAddOutlined,
  SnippetsOutlined,
  FileDoneOutlined,
  MailOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";
import useAuthCheck from "../utils/useAuthCheck";
import IssueCard from "../components/IssueCard";
import DashboardDetails from "../components/global/DashboardDetails";

function Dashboard() {
  useAuthCheck();

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
            <Routes>
              <Route path="/" element={<DashboardDetails />} />
              <Route path="ticket/all" element={<IssueBox />} />
            </Routes>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Dashboard;

// <Outlet />

// <IssueBox />
