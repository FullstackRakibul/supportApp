import React from "react";

import Dashboard from "../containers/Dashboard.jsx";
import ProfileCard from "../containers/ProfileCard.jsx";
import AgentCard from "../containers/AgentCard.jsx";
import ChatCard from "../containers/ChatCard.jsx";
import NotFoundPage from "../containers/NotFoundPage.jsx";
import EmailCard from "../containers/EmailCard.jsx";
import EmailList from "../containers/EmailList.jsx";
import CreateTicket from "../containers/ticket/CreateTicket.jsx";
import CreateTicketType from "../containers/ticket/CreateTicketType.jsx";
import DepartmentWiseTicket from "../containers/department/DepartmentWiseTicket.jsx";
import CreateUnit from "../containers/unit/CreateUnit.jsx";
import DepartmentListTable from "../containers/department/DepartmentListTable.jsx";
import Department from "../containers/Department.jsx";
import SessionIn from "../containers/auth/SessionIn.jsx";
import ManageIssue from "../containers/service/ManageIssue.jsx";
import TargetCreate from "../containers/service/TargetCreate.jsx";
import SessionForm from "../containers/auth/SessionForm.jsx";
import ReplyCard from "../containers/ticket/ticketReply/ReplyCard.jsx";

const routes =
  ({
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <ProfileCard />,
  },
  {
    path: "/agent",
    element: <AgentCard />,
  },
  {
    path: "/chat",
    element: <ChatCard />,
  },
  {
    path: "/emailBox",
    element: <EmailCard />,
  },
  {
    path: "/emailList",
    element: <EmailList />,
  },
  {
    path: "/createTicket",
    element: <CreateTicket />,
  },
  {
    path: "/createTicketType",
    element: <CreateTicketType />,
  },
  {
    path: "/departmentWiseTicket",
    element: <DepartmentWiseTicket />,
  },
  {
    path: "/departmentListTable",
    element: <DepartmentListTable />,
  },
  {
    path: "/department",
    element: <Department />,
  },
  {
    path: "/createUnit",
    element: <CreateUnit />,
  },
  {
    path: "/sessionform",
    element: <SessionForm />,
  },
  {
    path: "/manageIssue",
    element: <ManageIssue />,
  },
  {
    path: "/targetCreate",
    element: <TargetCreate />,
  },
  {
    path: "/replycard",
    element: <ReplyCard />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  });

export default routes;

// <Route  path="/profile" component={ProfileCard} />
// <Route  path="/agent" component={AgentCard} />
// <Route  path="/chat" component={ChatCard} />
