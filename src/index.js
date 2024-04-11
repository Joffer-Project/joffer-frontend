import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../src/pages/talent/tlogin/components/layout.jsx";
import BackgroundCarousel from "../src/pages/talent/tlogin/tlogin.jsx";
import App from "./App";
import "./index.css";
import ErrorPage from "./pages/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "talent",
    element: <div>our talent program!</div>,
  },
  {
    path: "talent/signup",
    element: <BackgroundCarousel />,
  },

  {
    path: "tlogin/layout",
    element: <Layout />,
  },
  {
    path: "recruiter",
    element: <div>Sign up for our talent program!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
