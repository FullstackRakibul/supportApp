import {Router, createBrowserRouter, BrowserRouter, Route, Routes} from "react-router-dom";
import routes from './Routes';




const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path={routes.map((routeData) => (
                <Route key={routeData.path} element={routeData.element}/>
            ))}/>
        </Routes>
    </BrowserRouter>
);

export default Router;