import { useRoutes, RouteObject, Navigate } from "react-router-dom";

import Layout from "../views/layout";
import Home from "../views/Home";
import User from "../views/User";

const GetRouters = () => {
  const routes: RouteObject[] = useRoutes([
    { path: "/", element: <Navigate to="/layout/home" /> },
    {
      path: "/layout",
      element: <Layout />,
      children: [
        { path: "user", element: <User />, index: true },
        { path: "home", element: <Home /> },
      ],
    },
  ]);
  return routes;
};

export default GetRouters;
