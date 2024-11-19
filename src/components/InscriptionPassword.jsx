import { useState } from "react";
import Cookies from "js-cookie";

import blind from "../assets/Blind.svg";
import eyesOnOutlined from "../assets/eyesOnOutlined.svg";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import ButtonBack from "./ButtonBack";
import axios from "axios";

function InscriptionPassword({
  passView,
  handleShowPassword,
  handleChange,
  setFormData,
  formData,
}) {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await axios.post(`http://localhost/backend/inscription`, {
        name: formData.name,
        firstName: formData.firstName,
        dob: formData.dob,
        genre: formData.genre,
        email: formData.email,
        password: formData.password,
      });
      const dataResponse = res.data;

      if (res.data.status === "success") {
        Cookies.set("token", dataResponse.data.token, {
          expires: 7,
          path: "",
          secure: true,
          sameSite: "Strict",
        });
        console.log(res);
        navigate("/home");
        // navigate("/register/test/1");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
    }
  }
  return (
    <>
      <div className="h-screen w-screen bg-white pt-[2em]  px-[2em] text-black">
        <ButtonBack link={"/register/email"} />
        <h1 className="text-[30px] font-medium mt-[0.5em]">
          Create your password ?
        </h1>
        <p className="w-full mb-[0.5em]">
          Create a password that is at least 6 characters long and is difficult
          to guess.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="password-input mb-[1em]">
            <label htmlFor="password" className="text-[17px]">
              Password
            </label>
            <br />
            <div className="relative">
              <input
                type={passView ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Your Password"
                className="form-input h-[50px] w-full border-grey-secondary border-b-[1px] outline-none mt-1 p-2 "
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div
                className="absolute right-[0.5em] top-[50%] translate-y-[-50%]"
                onClick={handleShowPassword}
              >
                <img src={passView ? eyesOnOutlined : blind} alt="" />
              </div>
            </div>
          </div>

          <Button type={"submit"} contenu={"Next"} />
        </form>
      </div>
    </>
  );
}

export default InscriptionPassword;
