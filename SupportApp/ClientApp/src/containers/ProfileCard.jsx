import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;
const ProfileCard = (props) => {
  return (
    <>
      <section className="flex items-center justify-center ">
        <Card
          className="w-3/12"
          cover={
            <img
              alt="profile"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title={props.Name}
            description={props.Email}
          />
        </Card>
      </section>
    </>
  );
};

ProfileCard.defaultProps = {
  Name: "Rakibul hasan",
  Email: "rakibul.it@gmail.com",
  PhoneExtension: "1024",
};

export default ProfileCard;
