import React from "react";
import { Route, Routes } from "react-router-dom";
import AgnetDashboard from "../pages/agent/AgnetDashboard";
import AgentSetting from "../pages/agent/AgentSetting";

const AgentModule = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<AgnetDashboard />} />
      </Routes>
    </>
  );
};

export default AgentModule;
