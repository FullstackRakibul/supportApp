import React, { useState, useEffect } from "react";

import { Card, Row, Col, message } from "antd";
import {
  EyeOutlined,
  UsergroupAddOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import AssignAgentModal from "./global/AssignAgentModal";
import UpdateTicketStatusModal from "./global/UpdateTicketStatusModal";

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

  const [assignModalVisible, setAssignModalVisible] = useState(false);
  const [selectedIssueId, setSelectedIssueId] = useState(null);

  const handleAssignAgentClick = () => {
    setSelectedIssueId(props.issueId);
    setAssignModalVisible(true);
  };

  // ticket status changes
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleUpdateTicketStatus = () => {
    setSelectedStatus(props.issueId);
    setStatusModalVisible(true);
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
              {`status : ${props.issueStatus}`}
            </Col>
          </Row>
          <Row>
            <Col
              className="font-sans"
              span={12}
            >{`create by : ${props.issueCreator}`}</Col>
            <Col className="font-sans flex gap-2" span={12}>
              <span className="flex text-lg gap-2">
                <NavLink to="/singleticketcard">
                  <EyeOutlined title="Single Issue Details" />
                </NavLink>
                <UsergroupAddOutlined
                  onClick={() => handleAssignAgentClick()}
                />
                <EditOutlined onClick={() => handleUpdateTicketStatus()} />
              </span>
            </Col>
          </Row>
        </div>
      </Card>
      <AssignAgentModal
        visible={assignModalVisible}
        onCancel={() => setAssignModalVisible(false)}
        issueId={selectedIssueId}
      />
      <UpdateTicketStatusModal
        visible={statusModalVisible}
        onCancel={() => setStatusModalVisible(false)}
        issueId={selectedStatus}
      />
    </>
  );
};

export default IssueCard;
