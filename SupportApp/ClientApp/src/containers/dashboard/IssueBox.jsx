import React, { useEffect, useState } from "react";
import IssueCard from "../../components/IssueCard";
import hasPermission from "../../utils/hasPermission.jsx";
import NotFoundPage from "../NotFoundPage.jsx";
import { Row, Col, Menu } from "antd";

import {
  FileAddOutlined,
  SnippetsOutlined,
  FileDoneOutlined,
  MailOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";
import { AxiosInstance } from "../../router/api.js";
import useAuthCheck from "../../utils/useAuthCheck.jsx";

const IssueBox = () => {
  const [issue, setIssue] = useState([]);
  const [target, setTarget] = useState([]);
  const [agent, setAgent] = useState([]);
  const [ticketStatuses, setTicketStatuses] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get(
          "/dashboard/Dashboards/IssueBox"
        );

        const responseFromTarget = await AxiosInstance.get("/api/Targets");
        const responseAgent = await AxiosInstance.get("/api/Supports");
        //console.log(responseAgent.data);
        setAgent(responseAgent.data);
        setTarget(responseFromTarget.data);
        setIssue(response.data.tickets);

        // var agent = responseFromTarget.data.ticketId == response.data.tickets.id;

        // fetch ticket status data.......
        const ticketStatusResponse = await AxiosInstance.get(
          "/api/Tickets/ticketStatus"
        );
        //console.log(ticketStatusResponse.data);
        setTicketStatuses(ticketStatusResponse.data);
      } catch (error) {
        console.log(`issue data fetch error : ${error}`);
      }
    };
    fetchData();
  }, []);

  // find agent info............
  const findAgentInfo = (issueId) => {
    const targetInfo = target.find(
      (targetData) => targetData.ticketId === issueId
    );
    if (!targetInfo) {
      return "Unassigned";
    }
    const agentInfo = agent.find(
      (agentData) => agentData.agentId === targetInfo.agentId
    );
    if (!agentInfo) {
      return "Unassigned";
    }

    return agentInfo.name;
  };

  // find ticket status ........

  const findIssueStatus = (status) => {
    // Check if ticketStatuses has been fetched and is an array
    if (!Array.isArray(ticketStatuses) || ticketStatuses.length === 0) {
      return "success";
    }

    // Find the index of the status in the array
    const statusIndex = ticketStatuses.indexOf(status);

    // Return the status name if found, otherwise return "Unknown"
    return statusIndex !== +1 ? ticketStatuses[statusIndex] : "Unknown";
  };

  return (
    <>
      <section>
        <Row>
          <Col span={6}></Col>
          <Col
            span={16}
            className="p-3 bg-[#f1f1f1] rounded-md flex flex-col gap-3 overflow-auto"
            style={{ maxHeight: "600px" }}
          >
            {issue.map((issueData) => (
              <IssueCard
                key={issueData.id}
                issueTitle={issueData.title}
                issueDescription={issueData.description}
                issueCreateDate={issueData.createdAt}
                assignAgent={findAgentInfo(issueData.id)}
                issueStatus={issueData.status}
                issueCreator={issueData.createdBy}
                issueId={issueData.id}
              />
            ))}
          </Col>
        </Row>
      </section>
    </>
  );
};

export default IssueBox;
