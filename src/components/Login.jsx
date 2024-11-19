import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import loginBg from "../assets/loginBg.svg";
import padlock from "../assets/Padlock.svg";
import blind from "../assets/Blind.svg";
import eyesOnOutlined from "../assets/eyesOnOutlined.svg";
import atSign from "../assets/AtSign.svg";
import Button from "./Button";
import PopUpPasswordIncorrect from "./PopUpPasswordIncorrect";
import Loading from "./Loading";

function Login({ passView, handleShowPassword }) {
  const [orderPopUp, setOrderPopUp] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(!isLoading);
    }, 2000); // 3 secondes

    return () => clearTimeout(timer); // Nettoyage du timer
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmitLogin(event, setOrderPupUp) {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost/backend/connexion/authenticate`,
        {
          email: formData.email,
          password: formData.password,
        }
      );
      const dataResponse = response.data;

      if (response.data.status === "success") {
        Cookies.set("token", dataResponse.data.token, {
          expires: 7,
          path: "",
          secure: true,
          sameSite: "Strict",
        });

        navigate("/home");
      } else {
        setOrderPupUp(!orderPopUp);
      }
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
    }
  }
  return (
    <>
      {!isLoading && <Loading />}
      {isLoading && (
        <div className="relative h-screen  w-screen bg-white pt-[89px] px-[2em] text-black">
          {orderPopUp && (
            <PopUpPasswordIncorrect
              orderPop={orderPopUp}
              setOrderPopUp={setOrderPopUp}
            />
          )}

          <div className="w-full flex justify-center">
            <img src={loginBg} alt="Login background" />
          </div>
          <div>
            <h1 className="text-[30px] font-medium my-[0.5em]">Login</h1>
            <form
              method="post"
              onSubmit={(e) => handleSubmitLogin(e, setOrderPopUp)}
            >
              <div className="email-input mb-[1em] flex items-center gap-2">
                <label htmlFor="email" className="text-[17px] ">
                  <img src={atSign} alt="Email icon" />
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="form-input h-[50px] w-full border-grey-secondary border-b-[1px] outline-none mt-1 p-2"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="password-input mb-[1em] flex items-center gap-2">
                <label htmlFor="password" className="text-[17px]">
                  <img src={padlock} alt="Password icon" />
                </label>
                <div className="relative w-full">
                  <input
                    type={passView ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="form-input h-[50px] w-full border-grey-secondary border-b-[1px] outline-none mt-1 p-2"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <div
                    className="absolute right-[0.5em] top-[50%] translate-y-[-50%]"
                    onClick={handleShowPassword}
                  >
                    <img
                      src={passView ? eyesOnOutlined : blind}
                      alt="Password visibility icon"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end mb-4">
                <span className="text-blue-primary text-[17px]">
                  <Link to="/forgot/">Forgot password ?</Link>
                </span>
              </div>

              <Button type="submit" contenu="Login" />
              <div className="w-full border-grey-secondary border-b-[1px] my-8"></div>
              <div className="flex justify-center gap-2">
                <span className="text-[17px]">New to E-korana ?</span>
                <span className="text-[17px] text-blue-primary">
                  <Link to="/register/">Register</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
