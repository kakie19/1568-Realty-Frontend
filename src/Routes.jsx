import React from "react";
import { useRoutes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Signin from "pages/Signin";
import Dashboard from "pages/Dashboard";
import FAQs from "pages/FAQs";
import Property from "pages/Property";
import Admin from "pages/Admin";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Signin />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "faqs",
      element: <FAQs />,
    },
    {
      path: "property",
      element: <Property />,
    },
    {
      path: "admin",
      element: <Admin />,
    },
  ]);

  return element;
};

export default ProjectRoutes;