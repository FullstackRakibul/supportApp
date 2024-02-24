import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeModule from "./router/EmployeeModule.jsx";
import PrivateRoute from "./router/PrivateRoute.jsx";
import AgentModule from "./router/AgentModule.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/employee/*" element={<EmployeeModule />} />
        <Route path="/agent/*" element={<AgentModule />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
