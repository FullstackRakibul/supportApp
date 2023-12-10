import React, { useState } from "react";
import {PushpinOutlined, QuestionCircleOutlined, UserOutlined} from "@ant-design/icons";

import { Avatar, Badge, Space,Button, Checkbox, Form, Input } from "antd";
import Icon, {
  AppstoreOutlined,
  HomeOutlined,
  MailOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
  SettingOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import Dashboard from "../containers/Dashboard.jsx";
import AgentCard from "../containers/AgentCard.jsx";
import ProfileCard from "../containers/ProfileCard.jsx";
import DropdownButton from "./DropdownButton.jsx";
import logo from "../assets/hameemgroup-sq-logo.png";
import userimg from "../assets/user01.png"

const menuItems = [
  {
    key: "/home",
    icon: <HomeOutlined />,
    label: "Dashboard",
    path: "/",
  },
  {
    key: "/chat",
    icon: <MessageOutlined />,
    label: "Chat Box",
    path: "/chat",
  },
  {
    key: "/emailBox",
    icon: <MailOutlined />,
    label: "Mail Create",
    path: "/emailBox",
  },
  {
    key: "/emailList",
    icon: <MailOutlined />,
    label: "Mail Box",
    path: "/emailList",
  },
];

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  console.log(toggleMenu);
  return (
    <>
      {/*<header className=" bg-primary shadow-sm p-4">*/}
      {/*  <div className="container mx-auto flex items-center justify-between">*/}
      {/*    <Menu mode="horizontal" className="rounded-xl font-normal hover:text-primary">*/}
      {/*      {menuItems.map((item) => (*/}
      {/*          <Menu.Item key={item.key} icon={item.icon}>*/}
      {/*            <NavLink to={item.path} >{item.label}</NavLink>*/}
      {/*          </Menu.Item>*/}
      {/*      ))}*/}
      {/*    </Menu>*/}
      {/*    /!* App Name *!/*/}
      {/*    <div className="text-white text-xl font-semibold text-primary">Support App</div>*/}

      {/*    /!* Profile Image with Dropdown Menu *!/*/}
      {/*    <div className="relative">*/}
      {/*      <button*/}
      {/*        onClick={toggleMenu}*/}
      {/*        className="flex items-center focus:outline-none"*/}
      {/*      >*/}
      {/*        <img*/}
      {/*          src="https://media.licdn.com/dms/image/C5603AQHChu_lpiwPYA/profile-displayphoto-shrink_800_800/0/1655310877339?e=2147483647&v=beta&t=LBwouPYFdXfxna6wDSxAmZMvv3orDsD6p5SaBEzaFPA"*/}
      {/*          alt="Profile"*/}
      {/*          className="w-8 h-8 rounded-full border-2 border-white"*/}
      {/*        />*/}
      {/*      </button>*/}

      {/*      /!* Dropdown Menu *!/*/}
      {/*      {isMenuOpen && (*/}
      {/*        <div className="absolute top-12 right-0 mt-2 bg-white shadow-md rounded-md">*/}
      {/*          <ul className="">*/}
      {/*            <li className="hover:bg-cyan-950 hover:rounded hover:text-white pr-20 p-2">*/}
      {/*              <NavLink to="/profile" className="font-medium text-md">*/}
      {/*                Profile*/}
      {/*              </NavLink>*/}
      {/*            </li>*/}
      {/*            <li className="hover:bg-cyan-950 hover:rounded hover:text-white pr-20 p-2">*/}
      {/*              <NavLink to="#" className="font-medium text-md">*/}
      {/*                Logout*/}
      {/*              </NavLink>*/}
      {/*            </li>*/}
      {/*          </ul>*/}
      {/*        </div>*/}
      {/*      )}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</header>*/}

      <header className="">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-4/12">
            <h3>Ha-Meem Group</h3>
          </div>
          <div className="w-4/12 flex justify-center items-center">
            <Form 
                onFinish={(state)=>{
                  console.log(state)
                }}
                style={{
                  width:'100%'
                }}
            >
               <Form.Item
                   colon={false}
                   name={'global-search'}
                   wrapperCol={{
                     span:24
                   }}
                   style={{marginBottom:0}}
               >
                 <Input  />
               </Form.Item>
            </Form>
          </div>
          <div className="w-4/12 flex flex-row justify-end">
            <div className="text-xl flex flex-row justify-around items-center gap-4">
              <PushpinOutlined className="text-2xl text-primary"  />
              <QuestionCircleOutlined  className="text-2xl" />
              <BellOutlined className="text-2xl" />
              <MessageOutlined className="text-2xl"/>
              <Avatar size={28} shape="circle" src={userimg}  icon={<UserOutlined />} />
            </div>
          </div>
        </div>
        {/*Header bottom design .....*/}
        <div className="bg-primary">
          <div className="container mx-auto items-center justify-between h-10">
            <h3 className="text-white text-2xl font-semibold flex items-center"> Ha-Meem Desk</h3>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;

/* 
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/agent" element={<AgentCard/>} />
            <Route path="/profile" element={<ProfileCard/>} />
        </Routes> */

//       {/* <header className="bg-white shadow p-4">
// <div className="container mx-auto flex justify-between">
//   <div className="flex items-center">
//     <NavLink to="/" className="text-3xl font-bold">
//       Ha-meem Group Support Center
//     </NavLink>
//     <div className="flex ml-4">
//       <input
//         type="text"
//         placeholder="Search"
//         className="form-control"
//       />
//       <button className="btn btn-outline-primary ml-2">Search</button>
//     </div>
//   </div>
//   <div>
//     {/* <DropdownButton
//       id="dropdown-basic-button"
//       title="Profile"
//       onSelect={handleProfileDropdown}
//     >
//       <Dropdown.Item href="#/action-1">Action</Dropdown.Item>

//       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>

//       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//     </DropdownButton> */}
//     </div>
//     </div>
//   </header> */}

// const navigate = useNavigate();
// const handleProfileDropdown = (event) => {
//   console.log(event);
// };
