import React, { useState } from "react";
import {
  PushpinOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  HomeOutlined,
  MessageOutlined,
  BellOutlined,
  MailOutlined,
  EditOutlined,
  AudioOutlined,
} from "@ant-design/icons";

import { Avatar, Button } from "antd";

import { NavLink } from "react-router-dom";

//media
import logo from "../assets/hameemgroup-software-logo-new.png";
import userimg from "../assets/user01.png";
import userimg2 from "../assets/hameemgroup-sq-logo-02.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="">
        <div className="px-5 mx-auto flex items-center justify-between">
          <div className="w-3/12 flex">
            <div className=""></div>
            <img src={logo} className=" h-7 " />
          </div>
          <div className="w-7/12 flex justify-center items-between h-10">
            <div className="text-primary p-1"></div>
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
            <section className="container mx-auto">
              <div className="flex flex-row justify-end items-center font-sans">
                <NavLink to="/createTicket">
                  <Button
                    type="primary"
                    className="font-sans font-semibold bg-primary"
                    icon={<EditOutlined />}
                  >
                    Create New Ticket
                  </Button>
                </NavLink>
              </div>
            </section>
            <p>.</p>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
