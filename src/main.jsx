import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import InscriptionFullName from "./components/InscriptionFullName";

// import ForgotPassword from "./components/ForgotPassword";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
// import InscriptionDOB from "./components/InscriptionDOB.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/forgot-password",
//     element: <ForgotPassword />,
//   },
//   {
//     path: "/register",
//     element: <InscriptionFullName />,
//   },
//   {
//     path: "/date-of-birth",
//     element:ji <InscriptionDOB />,
//   },
// ]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </StrictMode>
);
