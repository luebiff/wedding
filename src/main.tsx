import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/index.tsx";
import Wedding from "./pages/wedding/index.tsx";
import Info from "./pages/info/index.tsx";
import Response from "./pages/response/index.tsx";
import Presentation from "./pages/presentation/index.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <div>404 Not found</div>,
    },
    {
      path: "/bröllopet",
      element: <Wedding />,
    },
    {
      path: "/info",
      element: <Info />,
    },
    {
      path: "/osa",
      element: <Response />,
    },
    {
      path: "/brudfölje",
      element: <Presentation />,
    },
  ],
  {
    basename: "/",
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
