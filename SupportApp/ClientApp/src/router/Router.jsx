import {
  Router,
  createBrowserRouter,
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import routes from "./Routes";

const Router = () => (
  //<RouterProvider router={routes} />
  <createBrowserRouter router={routes} />
);

export default Router;
