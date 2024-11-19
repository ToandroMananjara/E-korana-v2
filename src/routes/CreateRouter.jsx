import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

import InscriptionFullName from "../components/InscriptionFullName";
import InscriptionDOB from "../components/InscriptionDOB";
import InscriptionEmail from "../components/InscriptionEmail";
import InscriptionGenre from "../components/InscriptionGenre";
import InscriptionPassword from "../components/InscriptionPassword";
import LogIn from "../components/Login";
import Test from "../components/Test";

import ForgotPassword from "../components/ForgotPassword";
import EnterOtp from "../components/EnterOtp";
import ResetPassword from "../components/ResetPassword";
import PageError from "../components/PageError";
import Home from "../pages/Home";
import Menu from "../pages/Menu";

function createRouter(
  passView,
  handleShowPassword,
  formData,
  setFormData,
  handleChange
) {
  return createBrowserRouter([
    {
      path: "/",
      element: (
        <LogIn passView={passView} handleShowPassword={handleShowPassword} />
      ),
      errorElement: <PageError />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "menu",
      element: <Menu />,
    },
    {
      path: "/register",
      element: (
        <div>
          <Outlet />
        </div>
      ),
      children: [
        {
          path: "",
          element: (
            <InscriptionFullName
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
            />
          ),
        },

        {
          path: "forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "date-of-birth",
          element: (
            <InscriptionDOB
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
            />
          ),
        },
        {
          path: "genre",
          element: (
            <InscriptionGenre
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
            />
          ),
        },
        {
          path: "email",
          element: (
            <InscriptionEmail
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
            />
          ),
        },
        {
          path: "password",
          element: (
            <InscriptionPassword
              passView={passView}
              handleShowPassword={handleShowPassword}
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
            />
          ),
        },
        {
          path: "test/:id",
          element: <Test />,
          loader: () =>
            fetch("https://jsonplaceholder.typicode.com/posts?_limit=10"),
        },
      ],
    },
    {
      path: "/forgot",
      element: (
        <div>
          <Outlet />
        </div>
      ),
      children: [
        {
          path: "",
          element: <ForgotPassword />,
        },

        {
          path: "otp",
          element: <EnterOtp />,
        },
        {
          path: "reset-password",
          element: (
            <ResetPassword
              passView={passView}
              handleShowPassword={handleShowPassword}
            />
          ),
        },
      ],
    },
  ]);
}
export default createRouter;
