import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import Dashboard from "../containers/Dashboard.jsx";
import ProfileCard from "../containers/ProfileCard.jsx";
import AgentCard from "../containers/AgentCard.jsx";
import ChatCard from "../containers/ChatCard.jsx";
import TicketCard from "../containers/TicketCard.jsx"
import App from "../App.jsx";
import EmailCard from "../containers/EmailCard.jsx";



const routes =[

    {
        path:"/",
        element:<EmailCard/>
    },
    {
        path:"/dashboard",
        element:<Dashboard/>,
    },
    {
        path:"/profile",
        element:<ProfileCard/>
    },
    {
        path:"/agent",
        element:<AgentCard/>
    },
    {
        path:"/chat",
        element:<ChatCard/>
    },
    

]

export default routes;



// <Route  path="/profile" component={ProfileCard} />
// <Route  path="/agent" component={AgentCard} />
// <Route  path="/chat" component={ChatCard} />