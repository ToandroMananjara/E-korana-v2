import { useState } from "react";
import { Link } from "react-router-dom";

import forgotPasswordBg from "../assets/forgotPasswordBg.svg";
import atSign from "../assets/AtSign.svg";
import Button from "./Button";
import ButtonBack from "./ButtonBack";

function ForgotPassword() {
  return (
    <>
      <div className="h-screen w-screen bg-white pt-[2em] px-[2em] text-black">
        <ButtonBack link={"/"} />
        <div className="w-full flex justify-center">
          <img src={forgotPasswordBg} alt="" />
        </div>
        <h1 className="text-[30px] font-medium my-[0.5em]">
          Forgot Password ?
        </h1>
        <p className="text-[17px] mb-[0.5em]">
          Don’t worry! It’s happens.Please enter the address associated with
          your account.
        </p>
        <form action="">
          <div className="name-input mb-[1em] flex items-center gap-2">
            <label htmlFor="name" className="text-[17px] ">
              <img src={atSign} alt="" />
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Email"
              className="form-input h-[50px] w-full border-grey-secondary border-b-[1px] outline-none  mt-1 p-2"
            />
          </div>

          <Button type={"submit"} link={"/forgot/otp"} contenu={"Submit"} />
        </form>
      </div>
    </>
  );
}

export default ForgotPassword;
