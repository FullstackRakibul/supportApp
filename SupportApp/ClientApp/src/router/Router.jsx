import {Router, createBrowserRouter, BrowserRouter, Route, Routes} from "react-router-dom";
import routes from './Routes';




const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path={routes.map()}/>
        </Routes>
    </BrowserRouter>
);

export default Router;