import React from "react";
import AgentIssueList from "../../containers/dashboard/agent/AgentIssueList";
import AgentMailIssueList from "../../containers/dashboard/agent/AgentMailIssueList";

const AgentIssue = () => {
  return (
    <>
      <AgentIssueList />
      <AgentMailIssueList />
    </>
  );
};

export default AgentIssue;
