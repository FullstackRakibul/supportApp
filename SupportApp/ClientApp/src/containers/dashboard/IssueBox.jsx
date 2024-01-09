import React, { useEffect, useState } from "react";
import IssueCard from "../../components/IssueCard";
import axios from "axios";

import axiosInstance from "../../router/api.js";

const IssueBox = () => {
  const [issue, setIssue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          "/dashboard/Dashboards/IssueBox"
        );
        console.log(response.data.tickets);
        setIssue(response.data.tickets);
      } catch (error) {
        console.log(`issue data fetch error : ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section
        className="p-3 bg-[#f1f1f1] rounded-md flex flex-col gap-3 overflow-auto"
        style={{ maxHeight: "550px" }}
      >
        {issue.map((issueData) => (
          <IssueCard
            issueTitle={issueData.title}
            issueDescription={issueData.description}
            issueCreateDate={issueData.createdAt}
            assignAgent={issueData.agentId}
            issueStatus={issueData.status}
          />
        ))}
      </section>
    </>
  );
};

export default IssueBox;
