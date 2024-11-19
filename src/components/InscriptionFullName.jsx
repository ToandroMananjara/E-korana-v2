import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signUpBg from "../assets/signUp.jpeg";
import Button from "./Button";

function InscriptionFullName({ formData, setFormData, handleChange }) {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    navigate("/register/date-of-birth");
  }
  return (
    <>
      <div className="h-screen w-screen bg-white pt-[89px] px-[2em] text-black">
        <div>
          <img src={signUpBg} alt="" />
        </div>
        <h1 className="text-[30px] font-medium my-[0.5em]">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="name-input mb-[1em]">
            <label htmlFor="name" className="text-[17px] ">
              Name
            </label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="form-input h-[50px] w-full border-grey-secondary border-[1px]  rounded-[15px] mt-1 p-2 outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="firstName-input mb-[1em]">
            <label htmlFor="firstName" className="text-[17px]">
              First name
            </label>
            <br />
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Your First Name"
              className="form-input h-[50px] w-full border-grey-secondary border-[1px] rounded-[15px] mt-1 p-2 outline-none"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <Button
            type={"submit"}
            // link={"/register/date-of-birth"}
            contenu={"Next"}
          />
          <div className="w-full border-grey-secondary border-b-[1px] my-8"></div>
          <div className="flex justify-center gap-2">
            <span className="text-[17px]">Have an account ?</span>
            <span className="text-[17px] text-blue-primary">
              <Link to="/">Log in</Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default InscriptionFullName;
