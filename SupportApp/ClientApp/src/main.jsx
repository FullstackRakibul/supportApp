import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, RouterProvider} from 'react-router-dom'
import router from './router/Router.jsx'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import routes from "./router/Routes.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
