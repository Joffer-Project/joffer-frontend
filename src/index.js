import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/error-page";
import App from "./App";
import BackgroundCarousel from "../src/pages/talent/tlogin/tlogin.jsx";
import Login from "../src/pages/talent/tsignup/tsignup.jsx";
import NewTalentForm from "../src/pages/talent/signup/index.jsx";

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
		path: "talent/signupform",
		element: <Login />,
	},
	{
		path: "recruiter",
		element: <div>Sign up for our talent program!</div>,
	},
	{
		path: "talent/signup/test",
		element: <NewTalentForm />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
