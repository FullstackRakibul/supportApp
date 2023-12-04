import React, { useState } from 'react'

import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import router from "./router/Router.jsx";

const App = () => (
    <>
        <Header/>
        <router/>
        <Footer/>
    </>
)

export default App
