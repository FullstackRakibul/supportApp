import React, { useState } from 'react'

import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import router from "./router/Router.jsx";
import Dashboard from "./containers/Dashboard.jsx";
import {Outlet} from "react-router-dom";

const App = () => (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
)

export default App
