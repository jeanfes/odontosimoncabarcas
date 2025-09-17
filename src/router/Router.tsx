import NotFound from "../pages/notFound/NotFound";
import { useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import Appointment from "../pages/appointment/Appointment";

const Router = () => {
  const routes = useRoutes([
    // RUTA HOME
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/services",
          element: <div>Services Page - Under Construction</div>,
        },
        {
          path: "/agenda-tu-cita",
          element: <Appointment />,
        },
      ],
    },
    // RUTA 404 - Página no encontrada
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

export default Router;
