import {Router, createBrowserRouter, BrowserRouter, Route, Routes} from "react-router-dom";
import routes from './Routes';




const router = () => (
    <BrowserRouter>
        <RouterProvider router={routes} />
    </BrowserRouter>
);

export default router;