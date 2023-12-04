import React from 'react'
import {Link, NavLink, Route, Routes} from 'react-router-dom'
import Dashboard from "../containers/Dashboard.jsx";
import AgentCard from "../containers/AgentCard.jsx";
import ProfileCard from "../containers/ProfileCard.jsx";

const Header = () => {
  return (
    <>
        <header>
            <nav>
                <div>
                    This is a header.
                </div>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/agent" element={<AgentCard/>} />
                    <Route path="/profile" element={<ProfileCard/>} />
                </Routes>
                
            </nav>
        </header>
    </>
  )
}

export default Header
