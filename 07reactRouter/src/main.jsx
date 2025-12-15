import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Layout from "./Layout.jsx";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";

// routing ka kaam kar rha jab bhi new route build krege usey children mai add krna pdega.
// const router = createBrowserRouter([
//   {
//     path: "/", // root element
//     element: <Layout />, // uske undr nested element
//     // aur children add krna ho to.
//     children: [
//       {
//         path: "", // '/' ke baad home
//         element: <Home />,
//       },
//       {
//         path: "about", // '/' ke baad about
//         element: <About />,
//       },
//       {
//         path: "contact", // '/' ke baad contact
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
