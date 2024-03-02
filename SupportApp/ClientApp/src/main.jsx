import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import EmployeeModule from "./router/EmployeeModule.jsx";
import PrivateRoute from "./router/PrivateRoute.jsx";
import AgentModule from "./router/AgentModule.jsx";
import SessionForm from "./containers/auth/SessionForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/employee/*" element={<EmployeeModule />} />
        <Route path="/agent/*" element={<AgentModule />} />
        <Route path="/sessionform" element={<SessionForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
