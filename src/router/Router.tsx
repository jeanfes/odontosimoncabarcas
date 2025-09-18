import InfoService from "../pages/services/pages/infoService/InfoService";
import Appointment from "../pages/appointment/Appointment";
import Services from "../pages/services/Services";
import NotFound from "../pages/notFound/NotFound";
import { useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";

const Router = () => {
  const routes = useRoutes([
    // RUTA INICIO
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/servicios",
          element: <Services />,
        },
        {
          path: "/servicios/:servicioId",
          element: <InfoService />,
        },
        {
          path: "/agenda-tu-cita",
          element: <Appointment />,
        },
        {
          path: "/reseñas",
          element: <Appointment />,
        },
        // RUTA 404 - Página no encontrada
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return routes;
};

export default Router;
