import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/error-page";
import App from "./App";
import BackgroundCarousel from "../src/pages/talent/tlogin/tlogin.jsx";

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
		path: "recruiter",
		element: <div>Sign up for our talent program!</div>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
