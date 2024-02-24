import React, { useState, useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import userDetails from "../../utils/userDetails";
import HeaderComponet from "../../components/HeaderComponent";
import Clock from "../../components/global/Clock";
import Footer from "../../components/Footer";
import useAuthCheck from "../../utils/useAuthCheck";
import AgentOverview from "./AgentOverview";
import AgentIssue from "./AgentIssue";
import AgentSetting from "./AgentSetting";

import { Layout, Menu, theme, Button } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserSwitchOutlined,
  DashboardOutlined,
  TagsOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const AgnetDashboard = () => {
  useAuthCheck();
  const { email, name, empCode, phoneNumber } = userDetails();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const customRoutes = [
    { path: "/agent/", label: "OverView", icon: <DashboardOutlined /> },
    {
      path: "/agent/agentIsuues/",
      label: "Issues",
      icon: <TagsOutlined />,
    },
    {
      path: "/agent/settings/",
      label: "Setting",
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
              <Route path="/*" element={<AgentOverview />} />
              <Route path="/agentIsuues/*" element={<AgentIssue />} />
              <Route path="/settings" element={<AgentSetting />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </>
  );
};

export default AgnetDashboard;
