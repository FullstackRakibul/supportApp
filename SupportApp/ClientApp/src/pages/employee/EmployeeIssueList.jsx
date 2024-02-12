import React from "react";
import { Row, Col, Menu, Card } from "antd";
import { NavLink, Route, Routes } from "react-router-dom";
import { MailOutlined, FileExcelOutlined } from "@ant-design/icons";
import EmployeeIssueListContainer from "../../containers/dashboard/employee/EmployeeIssueListContainer";
import EmployeeIssueListAcknowledgeContainer from "../../containers/dashboard/employee/EmployeeIssueListAcknowledgeContainer";

const EmployeeIssueList = () => {
  const customRoutes = [
    {
      path: "/employee/empisuuelist/",
      label: "Recent Raises",
      icon: <FileExcelOutlined />,
    },
    {
      path: "/employee/empisuuelist/acknowledge",
      label: "On hold",
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
              <Route path="/" element={<EmployeeIssueListContainer />} />
              <Route
                path="/acknowledge"
                element={<EmployeeIssueListAcknowledgeContainer />}
              />
            </Routes>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default EmployeeIssueList;