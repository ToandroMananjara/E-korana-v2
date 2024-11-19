import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import ButtonBack from "./ButtonBack";

function InscriptionEmail({ handleChange, setFormData, formData }) {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    navigate("/register/password");
  }
  return (
    <>
      <div className="h-screen w-screen bg-white pt-[2em]  px-[2em] text-black">
        <ButtonBack link={"/register/genre"} />
        <h1 className="text-[30px] font-medium my-[0.5em]">
          What’s your email <br /> address ?
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="email-input mb-[1em]">
            <label htmlFor="email" className="text-[17px]">
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="form-input h-[50px] w-full border-grey-secondary border-[1px] rounded-[15px] mt-1 p-2 outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <Button
            type={"submit"}
            // link={"/register/password"}
            contenu={"Next"}
          />
        </form>
      </div>
    </>
  );
}

export default InscriptionEmail;
