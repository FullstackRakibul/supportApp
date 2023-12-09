import React from "react";
import {createRoutesFromElements, Navigate, Route, Routes} from "react-router-dom";

import Dashboard from "../containers/Dashboard.jsx";
import ProfileCard from "../containers/ProfileCard.jsx";
import AgentCard from "../containers/AgentCard.jsx";
import ChatCard from "../containers/ChatCard.jsx";
import NotFoundPage from "../containers/NotFoundPage.jsx";
import EmailCard from "../containers/EmailCard.jsx";
import TicketCard from "../containers/TicketCard.jsx"
import App from "../App.jsx";
import EmailList from "../containers/EmailList.jsx";



const routes =(
    
    {
        path:"/",
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
    {
        path:"/emailBox",
        element:<EmailCard/>
    },
    {
        path:"/emailList",
        element:<EmailList/>
    },
    {
        path:"*",
        element:<NotFoundPage/>
    }
)

export default routes;



// <Route  path="/profile" component={ProfileCard} />
// <Route  path="/agent" component={AgentCard} />
// <Route  path="/chat" component={ChatCard} />