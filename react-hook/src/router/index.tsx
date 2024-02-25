import { useRoutes, RouteObject, Navigate } from "react-router-dom";

import Layout from "../views/layout";
import Home from "../views/Home";
import User from "../views/User";
import Ticket from "../views/Ticket";
import Test from "../views/Test";
import CountDown from "../views/CountDown";

const GetRouters = () => {
  const routes: RouteObject[] = useRoutes([
    { path: "/", element: <Navigate to="/layout/home" /> },
    {
      path: "/layout",
      element: <Layout />,
      children: [
        { path: "user", element: <User />, index: true },
        { path: "home", element: <Home /> },
        { path: "ticket", element: <Ticket /> },
        { path: "test", element: <Test /> },
        { path: "countdown", element: <CountDown /> },
      ],
    },
  ]);
  return routes;
};

export default GetRouters;
