import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
/* import App from "./App.tsx"; */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/contact/index.tsx";
import Home from "./pages/home/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not found</div>,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
