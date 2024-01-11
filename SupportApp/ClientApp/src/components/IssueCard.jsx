import React from "react";

import { Card, Row, Col } from "antd";
import {
  EyeOutlined,
  UsergroupAddOutlined,
  EditOutlined,
} from "@ant-design/icons";

const IssueCard = (props) => {
  const handleColor = () => {
    if (props.issueStatus == 2) {
      return "#6DB9EF";
    } else if (props.issueStatus == 4) {
      return "#ff0000";
    } else if (props.issueStatus == 5) {
      return "#72D82D";
    } else {
      return "#000";
    }
  };
  return (
    <>
      <Card
        key={props.id}
        className="mx-auto font-sans font-semibold"
        size="small"
        title={props.issueTitle}
        //extra={props.issueCreateDate}
        extra={
          <span style={{ color: "white", cursor: "pointer" }}>
            {props.issueCreateDate}
          </span>
        }
        style={{ width: "90%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        headStyle={{
          backgroundColor: handleColor(),
          color: "#fff",
          fontFamily: "Montserrat",
        }}
      >
        <p className=" text-justify ">{props.issueDescription}</p>

        <div className="bg-[#EEF5FF] p-2 mt-4 rounded-md">
          <Row>
            <Col
              className="font-sans"
              span={12}
            >{`acknowledge by : ${props.assignAgent}`}</Col>
            <Col className="font-sans" span={8}>
              {`issue status : ${props.issueStatus}`}
            </Col>
          </Row>
          <Row>
            <Col
              className="font-sans"
              span={12}
            >{`create by : ${props.assignCreator}`}</Col>
            <Col className="font-sans flex gap-2" span={12}>
              <span>action :</span>
              <span className="flex gap-2">
                <EyeOutlined />
                <UsergroupAddOutlined />
                <EditOutlined />
              </span>
            </Col>
          </Row>
        </div>
      </Card>
    </>
  );
};

export default IssueCard;
