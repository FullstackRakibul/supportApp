import React, { useState } from 'react'
import {Outlet, RouterProvider} from "react-router-dom";

import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import router from "./router/Router.jsx";

function App()  {
  return (
    <>
      <Header/>
        <createBrowserRouter>
            
        </createBrowserRouter>
      <Footer/>
    </>
  )
}

export default App
