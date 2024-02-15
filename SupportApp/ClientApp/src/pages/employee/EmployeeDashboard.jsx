import React, { useState, useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "../../App.css";

import Footer from "../../components/Footer";
import HeaderComponet from "../../components/HeaderComponent.jsx";

import { Layout, Menu, theme, Button } from "antd";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserSwitchOutlined,
  DashboardOutlined,
  TagsOutlined,
} from "@ant-design/icons";

import Clock from "../../components/global/Clock.jsx";
import EmployeeWelcomeContainer from "../../containers/dashboard/employee/EmployeeWelcomeContainer.jsx";
import EmployeeIssueList from "./EmployeeIssueList.jsx";
import EmployeeProfile from "./EmployeeProfile.jsx";

const { Header, Sider, Content } = Layout;

const EmployeeDashboard = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  //
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const customRoutes = [
    { path: "/employee/", label: "Dashboard", icon: <DashboardOutlined /> },
    {
      path: "/employee/empisuuelist/",
      label: "Issue List",
      icon: <TagsOutlined />,
    },
    {
      path: "/employee/empprofile/",
      label: "Profile",
      icon: <UserSwitchOutlined />,
    },
  ];
  return (
    <>
      <HeaderComponet />
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ backgroundColor: "#ffff" }}
        >
          <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
            {customRoutes.map((route) => (
              <Menu.Item
              className="hover:bg-primary"
                style={{ accentColor: "#002A53" }}
                key={route.path}
                icon={route.icon}
              >
                <NavLink className="font-sans font-semibold " to={route.path}>
                  {route.label}
                </NavLink>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout className="">
          <Header
            style={{
              padding: 0,
              background: "#F5F5F5",
            }}
          >
            <div className="flex items-start justify-between px-3">
              <div className="">
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                  }}
                />
              </div>
              <div className="flex flex-row items-center gap-4 h-16">
                <Clock />
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 10,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/*" element={<EmployeeWelcomeContainer />} />
              <Route path="/empisuuelist/*" element={<EmployeeIssueList />} />
              <Route path="/empprofile" element={<EmployeeProfile />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </>
  );
};

export default EmployeeDashboard;
