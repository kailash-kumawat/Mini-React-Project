import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout.jsx";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/", // root element
    element: <Layout />, // uske undr nested element
    // aur children add krna ho to.
    children: [
      {
        path: "", // '/' ke baad home
        element: <Home />,
      },
      {
        path: "about", // '/' ke baad about
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
