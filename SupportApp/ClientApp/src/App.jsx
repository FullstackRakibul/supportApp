import React, { useState } from "react";
import { NavLink, Outlet, Route, Router, Routes } from "react-router-dom";
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

// media import
import logo from "./assets/hameemgroup-sq-logo.png";
import userimg from "./assets/user01.png";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserSwitchOutlined,
  DashboardOutlined,
  IdcardOutlined,
  TagsOutlined,
  MailOutlined,
} from "@ant-design/icons";
import CreateTicket from "./containers/ticket/CreateTicket.jsx";

const { Header, Sider, Content } = Layout;

const App = () => {
  const customRoutes = [
    { path: "/", label: "Dashboard", icon: <DashboardOutlined /> },
    { path: "/agent", label: "Agent", icon: <UserSwitchOutlined /> },
    { path: "/profile", label: "Profile", icon: <IdcardOutlined /> },
    { path: "/emailList", label: "Email Box", icon: <MailOutlined /> },
    { path: "/ticketList", label: "Ticket List ", icon: <TagsOutlined /> },
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
          {/* <div className="demo-logo-vertical">
            <img src={logo} alt="Ha-meem desk" className="h-24 w-screen" />
          </div> */}
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
              padding: 24,
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
              <Route path="/emailList" element={<EmailList />} />
              <Route path="/createTicket" element={<CreateTicket />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </>
  );
};

export default App;

// const App = () => (
//   <>
//     <Header />
//     <div className="p-3">
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/profile" element={<ProfileCard />} />
//         <Route path="/agent" element={<AgentCard />} />
//         <Route path="/chat" element={<ChatCard />} />
//         <Route path="/emailBox" element={<EmailCard />} />
//         <Route path="/emailList" element={<EmailList />} />

//       </Routes>
//     </div>
//     <Footer />
//   </>
// );

// <Menu
// theme="light"
// mode="inline"
// defaultSelectedKeys={["1"]}
// items={[
//   {
//     key: "1",
//     icon: <UserOutlined />,
//     label: "nav 1",
//   },
//   {
//     key: "2",
//     icon: <VideoCameraOutlined />,
//     label: "nav 2",
//   },
//   {
//     key: "3",
//     icon: <UploadOutlined />,
//     label: "nav 3",
//   },
// ]}
// />
