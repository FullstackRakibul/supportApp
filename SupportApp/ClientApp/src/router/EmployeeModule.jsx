import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import EmployeeDashboard from "../pages/employee/EmployeeDashboard";
import EmployeeSettings from "../pages/employee/EmployeeSettings";

const EmployeeModule = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<EmployeeDashboard />} />
        <Route path="/settings/" element={<EmployeeSettings />} />
      </Routes>
    </>
  );
};
export default EmployeeModule;
