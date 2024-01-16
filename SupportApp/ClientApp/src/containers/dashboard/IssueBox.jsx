import React, { useEffect, useState } from "react";
import IssueCard from "../../components/IssueCard";

import axiosInstance from "../../router/api.js";
import { Row, Col } from "antd";

const IssueBox = () => {
  const [issue, setIssue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          "/dashboard/Dashboards/IssueBox"
        );
        setIssue(response.data.tickets);
      } catch (error) {
        console.log(`issue data fetch error : ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section>
        <Row>
          <Col span={6}>
            <div>
              <ul>
                <li>Test 01</li>
                <li>Test 01</li>
                <li>Test 01</li>
                <li>Test 01</li>
                <li>Test 01</li>
                <li>Test 01</li>
                <li>Test 01</li>
              </ul>
            </div>
          </Col>
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
                assignAgent={"Rakibul Hasan"}
                issueStatus={issueData.status}
                assignCreator={"Employee Name"}
              />
            ))}
          </Col>
        </Row>
      </section>
    </>
  );
};

export default IssueBox;
