import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

//import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./containers/Dashboard.jsx";
import AgentCard from "./containers/AgentCard.jsx";
import ProfileCard from "./containers/ProfileCard.jsx";
import ChatCard from "./containers/ChatCard.jsx";
import EmailList from "./containers/EmailList.jsx";
import TicketCard from "./containers/TicketCard.jsx";
import HeaderComponet from "./components/HeaderComponent.jsx";

//
import { Layout, Menu, theme, Button, Avatar } from "antd";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserSwitchOutlined,
  DashboardOutlined,
  IdcardOutlined,
  TagsOutlined,
  MailOutlined,
  DatabaseOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";
import CreateTicket from "./containers/ticket/CreateTicket.jsx";
import EmailCard from "./containers/EmailCard.jsx";
import CreateTicketType from "./containers/ticket/CreateTicketType.jsx";
import UnitCard from "./containers/UnitCard.jsx";
import Department from "./containers/Department.jsx";
import Signin from "./containers/auth/Signin.jsx";

const { Header, Sider, Content } = Layout;

const App = () => {
  const customRoutes = [
    { path: "/", label: "Dashboard", icon: <DashboardOutlined /> },
    { path: "/agent", label: "Agent", icon: <UserSwitchOutlined /> },
    { path: "/profile", label: "Profile", icon: <IdcardOutlined /> },
    { path: "/emailList", label: "Email", icon: <MailOutlined /> },
    { path: "/ticketList", label: "Ticket", icon: <TagsOutlined /> },
    {
      path: "/department",
      label: "Department",
      icon: <DatabaseOutlined />,
    },
    { path: "/unit", label: "Unit", icon: <DeploymentUnitOutlined /> },
  ];
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
                style={{ accentColor: "#000" }}
                key={route.path}
                icon={route.icon}
              >
                <NavLink className="font-sans font-semibold" to={route.path}>
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
                {/* <PushpinOutlined className="text-2xl text-primary" />
                <QuestionCircleOutlined className="text-2xl" />
                <BellOutlined className="text-2xl" />
                <MessageOutlined className="text-2xl" />
                <Avatar
                  //size={28}
                  shape="circle"
                  src={userimg}
                  icon={<UserOutlined />}
                /> */}
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
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<ProfileCard />} />
              <Route path="/agent" element={<AgentCard />} />
              <Route path="/chat" element={<ChatCard />} />
              <Route path="/ticketList" element={<TicketCard />} />
              <Route path="/emailList" element={<EmailCard />} />
              <Route path="/createTicket" element={<CreateTicket />} />
              <Route path="/createTicketType" element={<CreateTicketType />} />
              <Route path="/unit" element={<UnitCard />} />
              <Route path="/department" element={<Department />} />
              <Route path="/signin" element={<Signin />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </>
  );
};

export default App;
