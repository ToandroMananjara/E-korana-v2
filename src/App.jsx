import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import createRouter from "./routes/CreateRouter";

function App() {
  const [passView, setPassView] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    dob: "",
    genre: "",
    email: "",
    password: "",
  });

  const handleShowPassword = () => {
    setPassView(!passView);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const router = createRouter(
    passView,
    handleShowPassword,
    formData,
    setFormData,
    handleChange
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
