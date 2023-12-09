import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./containers/Dashboard.jsx";
import { Outlet, Route, Router, Routes } from "react-router-dom";
import AgentCard from "./containers/AgentCard.jsx";
import ProfileCard from "./containers/ProfileCard.jsx";
import ChatCard from "./containers/ChatCard.jsx";
import EmailCard from "./containers/EmailCard.jsx";
import EmailList from "./containers/EmailList.jsx";

const App = () => (
  <>
    <Header />
    <div className="p-3">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<ProfileCard />} />
        <Route path="/agent" element={<AgentCard />} />
        <Route path="/chat" element={<ChatCard />} />
        <Route path="/emailBox" element={<EmailCard />} />
        <Route path="/emailList" element={<EmailList />} />
          
      </Routes>
    </div>
    <Footer />
  </>
);

export default App;
