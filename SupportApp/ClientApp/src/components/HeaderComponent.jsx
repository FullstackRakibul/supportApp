import React, { useState } from "react";
import {
  PushpinOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  MessageOutlined,
  BellOutlined,
  MailOutlined,
  DeleteOutlined,
  EditOutlined,
  RedoOutlined,
  AudioOutlined,
} from "@ant-design/icons";

import {
  Avatar,
  Badge,
  Space,
  Button,
  Checkbox,
  Form,
  Input,
  Flex,
  Select,
} from "antd";

const { Search } = Input;

import { Menu } from "antd";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import Dashboard from "../containers/Dashboard.jsx";
import AgentCard from "../containers/AgentCard.jsx";
import ProfileCard from "../containers/ProfileCard.jsx";
import DropdownButton from "./DropdownButton.jsx";

//media
import logo from "../assets/hameemgroup-software-logo-new.png";
import userimg from "../assets/user01.png";
import userimg2 from "../assets/hameemgroup-sq-logo-02.png";

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
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  console.log(toggleMenu);
  return (
    <>
      <header className="">
        <div className="px-5 mx-auto flex items-center justify-between">
          <div className="w-3/12 flex">
            <div className="">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                }}
              />
            </div>
            <img src={logo} className=" h-7 " />
          </div>
          <div className="w-7/12 flex justify-center items-between h-10">
            <div className="text-primary p-1">
              <Search
                size="medium"
                placeholder="input search text"
                suffix={suffix}
                type="dashed"
              />
            </div>
            <Form
              size="medium"
              onFinish={(state) => {
                console.log(state);
              }}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                gap: 4,
              }}
              className="flex flex-row items-center justify-end "
            >
              <Form.Item
                colon={false}
                name={"global-search"}
                style={{ marginBottom: 0 }}
              >
                <Select
                  style={{
                    width: 240,
                    margin: "0 8px",
                    fontWeight: "500",
                  }}
                >
                  <Select.Option value="SearchById">
                    Rifat Garments Ltd.
                  </Select.Option>
                  <Select.Option value="">
                    Creative Collection Ltd.
                  </Select.Option>
                </Select>
              </Form.Item>
            </Form>
          </div>
          <div className="w-2/12 flex flex-row justify-end">
            <div className="text-xl flex flex-row justify-around items-center gap-4">
              <PushpinOutlined className="text-2xl text-primary" />
              <QuestionCircleOutlined className="text-2xl" />
              <BellOutlined className="text-2xl" />
              <MessageOutlined className="text-2xl" />
              <Avatar
                size={28}
                shape="circle"
                src={userimg}
                icon={<UserOutlined />}
              />
            </div>
          </div>
        </div>

        {/*Header bottom design .....*/}
        <div className="bg-primary">
          <div className="container mx-auto items-center justify-between h-10"></div>
        </div>
        <div className=" mx-auto flex flex-row justify-between items-center py-2 px-3">
          <div className=" w-1/12 flex item-center justify-center relative ">
            <img
              src={userimg2}
              className="h-14  absolute bottom-0 bg-white rounded-full drop-shadow-xl "
            />
          </div>
          <div className="w-11/12 flex flex-row justify-end gap-3">
            <Button
              type="primary"
              className="bg-[#1E99DC]"
              icon={<EditOutlined />}
            >
              Create
            </Button>
            {/* <Button
              className="bg-[#ffd82c] text-black font-semibold "
              icon={<RedoOutlined />}
            >
              Update
            </Button>
            <Button  type="primary" danger icon={<DeleteOutlined />}>
              Delete
            </Button> */}
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

{
  /*<header className=" bg-primary shadow-sm p-4">*/
}
{
  /*  <div className="container mx-auto flex items-center justify-between">*/
}
{
  /*    <Menu mode="horizontal" className="rounded-xl font-normal hover:text-primary">*/
}
{
  /*      {menuItems.map((item) => (*/
}
{
  /*          <Menu.Item key={item.key} icon={item.icon}>*/
}
{
  /*            <NavLink to={item.path} >{item.label}</NavLink>*/
}
{
  /*          </Menu.Item>*/
}
{
  /*      ))}*/
}
{
  /*    </Menu>*/
}
{
  /*    /!* App Name *!/*/
}
{
  /*    <div className="text-white text-xl font-semibold text-primary">Support App</div>*/
}

{
  /*    /!* Profile Image with Dropdown Menu *!/*/
}
{
  /*    <div className="relative">*/
}
{
  /*      <button*/
}
{
  /*        onClick={toggleMenu}*/
}
{
  /*        className="flex items-center focus:outline-none"*/
}
{
  /*      >*/
}
{
  /*        <img*/
}
{
  /*          src="https://media.licdn.com/dms/image/C5603AQHChu_lpiwPYA/profile-displayphoto-shrink_800_800/0/1655310877339?e=2147483647&v=beta&t=LBwouPYFdXfxna6wDSxAmZMvv3orDsD6p5SaBEzaFPA"*/
}
{
  /*          alt="Profile"*/
}
{
  /*          className="w-8 h-8 rounded-full border-2 border-white"*/
}
{
  /*        />*/
}
{
  /*      </button>*/
}

{
  /*      /!* Dropdown Menu *!/*/
}
{
  /*      {isMenuOpen && (*/
}
{
  /*        <div className="absolute top-12 right-0 mt-2 bg-white shadow-md rounded-md">*/
}
{
  /*          <ul className="">*/
}
{
  /*            <li className="hover:bg-cyan-950 hover:rounded hover:text-white pr-20 p-2">*/
}
{
  /*              <NavLink to="/profile" className="font-medium text-md">*/
}
{
  /*                Profile*/
}
{
  /*              </NavLink>*/
}
{
  /*            </li>*/
}
{
  /*            <li className="hover:bg-cyan-950 hover:rounded hover:text-white pr-20 p-2">*/
}
{
  /*              <NavLink to="#" className="font-medium text-md">*/
}
{
  /*                Logout*/
}
{
  /*              </NavLink>*/
}
{
  /*            </li>*/
}
{
  /*          </ul>*/
}
{
  /*        </div>*/
}
{
  /*      )}*/
}
{
  /*    </div>*/
}
{
  /*  </div>*/
}
{
  /*</header>*/
}

{
  /* <Menu mode="horizontal" className="bg-primary text-white h-10">
              {menuItems.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>
                  <NavLink to={item.path} className="hover:text-black">
                    {item.label}
                  </NavLink>
                </Menu.Item>
              ))}
            </Menu> */
}
