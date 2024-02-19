import React, { useState } from "react";
import { Row, Col, Menu, Card } from "antd";
import { NavLink, Route, Routes } from "react-router-dom";
import { MailOutlined, FileExcelOutlined } from "@ant-design/icons";

import EmployeeIssueListContainer from "../../containers/dashboard/employee/EmployeeIssueListContainer";
import EmployeeIssueListAcknowledgeContainer from "../../containers/dashboard/employee/EmployeeIssueListAcknowledgeContainer";
import EmployeeIssueCreateContainer from "../../containers/dashboard/employee/EmployeeIssueCreateContainer";

import ReviewCard from "../../containers/ticket/ReviewCard";

const EmployeeIssueList = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [ticketId, setTicketId] = useState(0);

  const handleButtonAndKey = (btnId, id) => {
    setActiveButton(btnId);
    setTicketId(id);
  };
  const customRoutes = [
    {
      path: "/employee/empisuuelist/",
      label: "Raise Issue",
      icon: <MailOutlined />,
    },
    {
      path: "/employee/empisuuelist/recent",
      label: "Recent Raises",
      icon: <FileExcelOutlined />,
    },
    {
      path: "/employee/empisuuelist/acknowledge",
      label: "Acknowledge",
      icon: <MailOutlined />,
    },
    {
      path: "/employee/empisuuelist/reviewCard",
      label: "Review Issue",
      icon: <MailOutlined />,
    },
  ];

  console.log("Ticket : ", ticketId);
  console.log("Button : ", activeButton);

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
              <Route
                path="/"
                element={
                  <EmployeeIssueCreateContainer
                    handleFunction={handleButtonAndKey}
                  />
                }
              />
              <Route
                path="/recent"
                element={
                  <EmployeeIssueListContainer
                    handleFunction={handleButtonAndKey}
                  />
                }
              />
              <Route
                path="/acknowledge"
                element={
                  <EmployeeIssueListAcknowledgeContainer
                    handleFunction={handleButtonAndKey}
                  />
                }
              />
              <Route
                path="/reviewCard/*"
                element={<ReviewCard handleFunction={handleButtonAndKey} />}
              />
            </Routes>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default EmployeeIssueList;
